import { defineConfig } from 'dumi';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
  extraPostCSSPlugins:[
    require('tailwindcss')({
      config: './tailwind.config.js'
    })
  ],
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'bump-ui',
  },
  apiParser:{},
  resolve: {
    entryFile: './src/index.tsx',
  },
});
