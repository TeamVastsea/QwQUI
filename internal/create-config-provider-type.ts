import fg from 'fast-glob';
import { resolve } from 'path';
import { compile } from 'sass';
import { CssNode, parse, walk } from 'css-tree';
import { Project, PropertySignatureStructure, SourceFile } from 'ts-morph';
import camelcase from 'camelcase';
import { existsSync, writeFileSync } from 'fs-extra';

const getComponentStyles = ()=>{
  const componentStyles = fg.sync('packages/components/**/*.scss', {ignore: ['**/node_modules', 'packages/components/theme']})
  .map((path) => {
    const pathArray = path.split('/');
    const componentName = pathArray[2];
    return [componentName, resolve(pathArray.join('/'))]
  })
  const componentStylesObject:Record<string,string[]> = {}
  for (const [name, path] of componentStyles){
    if (componentStylesObject[name]) {
      componentStylesObject[name].push(path)
    }else{
      componentStylesObject[name] = [path];
    }
  }
  return componentStylesObject;
}

const getThemeVars = () => {
  const themePaths = fg.sync('packages/theme/**/*.scss', {ignore: ['**/node_modules']})
  .map((path) => {
    return resolve(path)
  })
  const properties = [];
  for (const path of themePaths){
    const {css} = compile(path, {silenceDeprecations: ['import']});
    const ast = parse(css);
    walk(ast, function(node){
      if (node.type === 'Declaration'){
        if (!properties.includes(node.property)){
          properties.push(node.property);
        }
      }
    })
  }
  return properties;
}

/**
 * 
 * @param componentName
 * @param vars Standardized variable names
 */
const createStyleConfig = (sourceFile: SourceFile, componentName: string, vars: string[]) => {
  const properties = vars.map((varName) => {
    return {
      name: `'${varName}'?`,
      type: 'string',
    } as PropertySignatureStructure
  })
  sourceFile.insertInterface(0, {
    name: `${camelcase(componentName,{pascalCase: true})}CSSVar`,
    properties,
  });
}

const template = 
`type Seq = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}
type Tokens = {
  'zen'?: Partial<Seq>;
  'gray'?: Partial<Seq>;
  'red'?: Partial<Seq>;
  'danger'?: Partial<Seq>;
  'pink'?: Partial<Seq>;
  'grape'?: Partial<Seq>;
  'violet'?: Partial<Seq>;
  'indigo'?: Partial<Seq>;
  'blue'?: Partial<Seq>;
  'primary'?: Partial<Seq>;
  'cyan'?: Partial<Seq>;
  'teal'?: Partial<Seq>;
  'green'?: Partial<Seq>;
  'success'?: Partial<Seq>;
  'lime'?: Partial<Seq>;
  'yellow'?: Partial<Seq>;
  'orange'?: Partial<Seq>;
  'warning'?: Partial<Seq>;
  'radius'?: {
    xs?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
    full?: string
  };
  'breakpoint'?: {
    xs?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
    xxl?: string
  };
}

export type ConfigProviderProps = {
  direction?: 'ltr' | 'rtl',
  tokens?: Partial<Tokens>,
  component?: Partial<ComponentVars>
}
`

const app = () => {
  const componentStyles = getComponentStyles();
  const commonVar = getThemeVars();
  const astMap = new Map<string,CssNode[]>();
  for (const [key, paths] of Object.entries(componentStyles)){
    for (const path of paths) {
      const {css} = compile(path, {silenceDeprecations: ['import'] })
      const ast = parse(css,{ parseAtrulePrelude: true, parseCustomProperty: true, parseRulePrelude: true, parseValue: true });
      if (astMap.has(key)) {
        astMap.get(key).push(ast)
      } else {
        astMap.set(key,[ast])
      }
    }
  }
  const components = Object.keys(componentStyles);
  const cssVars = new Map<string, string[]>();
  for (const comp of components) {
    const asts = astMap.get(comp);
    const names:string[] = [];
    for (const ast of asts) {
      walk(ast,function(node){
        if (node.type === 'Identifier' && node.name.startsWith('--')){
          if (commonVar.includes(node.name)){
            return;
          }
          names.push(node.name);
        }
      })
      if(!names.length){
        continue;
      }
    }
    const normalizationCSSVar = names.map((name) => {
      return name.replace(/^--/, '')
    });
    cssVars.set(comp, normalizationCSSVar);
  }

  const componentTokenTypeFilePath = resolve('packages/components/config-provider/src/config-provider-component-token.type.ts');
  if (!existsSync(componentTokenTypeFilePath)) {
    writeFileSync(componentTokenTypeFilePath, '');
  }
  const componentFilePath = resolve('packages/components/config-provider/src/config-provider.type.ts');

  const proj = new Project();
  const tokenSf = proj.createSourceFile(componentTokenTypeFilePath, '', {overwrite: true});
  const compsf= proj.createSourceFile(componentFilePath, template,{overwrite: true})

  const componentVarsInterface = tokenSf.getInterface('ComponentVars');
  if (componentVarsInterface){
    componentVarsInterface.remove();
  }
  tokenSf.insertInterface(0, {
    name: 'ComponentVars',
    properties: components.filter((compName) => cssVars.get(compName).length).map((comp) => ({
      name: comp,
      type: `${camelcase(comp, {pascalCase: true})}CSSVar`,
    })),
    isExported: true
  })

  for (const [compName, vars] of Array.from(cssVars.entries())){
    if (!vars.length) {
      continue;
    }
    createStyleConfig(tokenSf, compName, vars);
  }

  tokenSf.saveSync();
  compsf.addImportDeclaration({
    namedImports: ['ComponentVars'],
    moduleSpecifier: './config-provider-component-token.type.ts'
  })
  compsf.saveSync();
}

app();