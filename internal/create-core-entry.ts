import { existsSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { outputFileSync } from 'fs-extra';
import { COMPONENT_ROOT } from "./const";
import { join } from "node:path";

function app() {
  const dirs = readdirSync(COMPONENT_ROOT);
  const blackList = ['dist', '.rslib', 'node_modules']
  const exportStmts = dirs
    .filter(path => !statSync(join(COMPONENT_ROOT, path)).isFile())
    .filter(path => !blackList.some(name => path.includes(name)))
    .map(dir => `export * from './${dir}'`);
  if (existsSync(join(__dirname, '../packages/components/index.ts'))) {
    unlinkSync(join(__dirname, '../packages/components/index.ts'))
  }
  outputFileSync(
    join(__dirname, '../packages/components/index.ts'),
    exportStmts.join('\n')
  )
}

app();