import { join } from "path"

export const packagesJSON = (name: string) => {
return `{
  "name": "@qwqui/${name}",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "rslib build",
    "clean:dist": "rimraf dist .rslib",
    "clean:deps": "rimraf node_modules"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "types": "./dist/index.d.mts",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.mts"
    }
  },
  "files": [
    "dist"
  ],
  "peerDependencies": {
    "react": "18.3.1"
  }
}`
}
export const buildFile = () => {
  return `import { defineBuild } from '@qwqui/build';
export default defineBuild();`
}

export const tsConfigFile = () => {
  return `{
    "include": [
      "index.ts",
      "./**/*.ts"
    ],
    "exclude": [
      "node_modules",
      "**/node_modules",
      "rslib.config.ts",
      "**/rslib.config.ts"
    ],
    "extends": "../../tsconfig.json"
}`
}

export const entryFile = (name:string) => {
  return `export * from './src/${name}'`
}

export const componentTemplate = (name: string) => {
  return `import React from 'react';
export const ${name} = () => {
  return (
    <>
      hello world
    </>
  )
}`
}

export const readmeTemplate = (name: string) => {
  return `# @qwqui/${name}

<!-- Description -->

## Install

\`\`\`bash
pnpm add @qwqui/${name}
\`\`\`

## License

MIT
`
}


export const tsconfig = () => {
  return `{
  "include": [
    "index.ts",
    "src"
  ],
  "exclude": [
    "node_modules"
  ],
  "extends": "../../../tsconfig.json"
}  
`
}

export const useTemplates = (root:string, kebabCaseName: string, camelcaseName:string) => {
  const componentPath = join(root, kebabCaseName);
  return [
    [
      join(componentPath, 'package.json'),
      packagesJSON(kebabCaseName)
    ],
    [
      join(componentPath, 'rslib.config.ts'),
      buildFile()
    ],
    [
      join(componentPath, 'index.ts'),
      entryFile(kebabCaseName)
    ],
    [
      join(componentPath, 'src', `${kebabCaseName}.tsx`),
      componentTemplate(camelcaseName)
    ],
    [
      join(componentPath, 'README.md'),
      readmeTemplate(kebabCaseName)
    ],
    [
      join(componentPath, 'tsconfig.json'),
      tsconfig()
    ]
  ]
}