import { join } from "path"

export const packagesJSON = (name: string) => {
return `{
  "name": "@qwqui/${name}",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "vite build && tsup ./index.ts --dts --format cjs,esm",
    "clean:dist": "rimraf dist",
    "clean:deps": "rimraf node_modules"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "types": "./dist/index.d.ts",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "exports": {
    ".": {
      "require": "./dist/index.js",
      "import": "./dist/index.mjs"
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
  return `import { defineBuild } from '../../build';
export default defineBuild();`
}

export const tsConfigFile = () => {
  return `{
  "extends": "../../../tsconfig.json",
  "include": [
    "./src/*",
    "index.ts"
  ],
  "exclude": [
    "node_modules",
    "vite.config.mts",
    "dist"
  ]
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

export const useTemplates = (root:string, kebabCaseName: string, camelcaseName:string) => {
  const componentPath = join(root, kebabCaseName);
  return [
    [
      join(componentPath, 'package.json'),
      packagesJSON(kebabCaseName)
    ],
    [
      join(componentPath, 'vite.config.mts'),
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
    ]
  ]
}