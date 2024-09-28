import { defineConfig, RslibConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { join, resolve, sep, } from 'node:path';

export interface DefineBuildConfig {
  plugins?: RslibConfig['plugins']
  external?: (string | RegExp)[]
}


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


export const defineBuild = (config: DefineBuildConfig = {}) => {
  const shared = {
    dts: {
      bundle: true
    }
  }
  const root = join(__dirname, '../../')
  config.plugins = config?.plugins ?? [];
  config.plugins.push(
    pluginReact(),
    pluginSass({
      sassLoaderOptions: {
        sassOptions: {

        }
      }
    })
  )
  return defineConfig({
    plugins: config.plugins,
    lib: [
      {
        ...shared,
        format: 'esm',
        output: {
          distPath: {
            css: '.',
          },
        },
      },
      {
        ...shared,
        format: 'cjs',
        output: {
          distPath: {
            css: '.',
          }
        }
      },
    ],
    source: {
      entry: {
        index: absCwd('index.ts'),
      },
      alias: {
        '@qwqui/*': resolve(__dirname, '../components'),
        '@qwqui/theme$': resolve(__dirname, '../theme')
      }
    },
    output: {
      cleanDistPath: 'auto',
      externals: config.external ?? [],
    },
  })
}

