import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from "@rspress/plugin-preview";
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'QwQUI - Docs',
  description: 'Doc for QwQUI',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
  plugins: [pluginPreview()],
  builderConfig: {
    // plugins: [
    //   pluginSass()
    // ],
    tools: {
      rspack: {
        resolve: {
          alias: {
            '@qwqui/core': path.join(__dirname, '../packages/components'),
            '@qwqui/theme': path.join(__dirname, '../packages/theme/index.scss')
          },
        },
      },
    }
  }
});
