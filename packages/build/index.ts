import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { join, resolve, sep, } from 'node:path';

export const cwd = () => process.cwd();
export const absCwd = (...path: string[]) => join(cwd(), ...path);

function splitVar(varName: string) {
  const reg = /[A-Z]{2,}(?=[A-Z][a-z]+|[0-9]|[^a-zA-Z0-9])|[A-Z]?[a-z]+|[A-Z]|[0-9]/g;
  return varName.match(reg) || <string[]>[];
}

export function kebabCase(varName: string) {
  const nameArr = splitVar(varName);
  return nameArr.map((item) => item.toLowerCase()).join('-');
}

export function camelCase(varName: string, isFirstWordUpperCase = false) {
  const nameArr = splitVar(varName);
  return nameArr.map((item, index) => {
    if (index === 0 && !isFirstWordUpperCase) {
      return item.toLowerCase();
    }
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  }).join('');
}

const compName = (path: string) => camelCase(
  path.split(sep).at(-1) ?? '', true
);

export interface DefineBuildConfig {
  external?: (string | RegExp)[],
  plugins?: PluginOption[]
}



export const defineBuild = (config: DefineBuildConfig = {}) => {
  const basePath = absCwd();
  const componentName = compName(basePath);
  console.log(absCwd('tsconfig.json'));
  if (!config.plugins) {
    config.plugins = [];
  }
  if (!config.external) {
    config.external = []
  }
  config.external.push('react', 'react-dom')
  config.plugins.push(
    react()
  );
  return defineConfig({
    ...config,
    publicDir: false,
    build: {
      rollupOptions: {
        external: config.external,
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          }
        }
      },
      lib: {
        name: componentName,
        entry: absCwd('index.ts'),
        fileName: 'index',
        formats: ['es', 'cjs', 'umd', 'system']
      },
    },
    resolve: {
      alias: {
        '@qwqui/build': resolve(__dirname, 'index.ts'),
      }
    },
  })
}