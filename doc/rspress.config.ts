import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from "@rspress/plugin-preview";
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'QwQUI - Docs',
  description: 'Doc for QwQUI',
  icon: '/Logo.svg',
  logo: {
    light: '/logo-with-text-light.png',
    dark: '/logo-with-text-dark.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
  plugins: [pluginPreview()],
  builderConfig: {
    plugins: [
      pluginSass()
    ],
    tools: {
      rspack: {
        resolve: {
          alias: {
            '@qwqui/core': path.join(__dirname, '../packages/components'),
            '@qwqui/theme': path.join(__dirname, '../packages/theme/index.scss'),
            '@qwqui/tools': path.join(__dirname, '../packages/tools'),
            '@qwqui/config-provider': path.join(__dirname, '../packages/components/config-provider')
          },
        },
      },
    }
  }
});
