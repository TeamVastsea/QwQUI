import camelcase from 'camelcase';
import dashify from 'dashify';
import inquirer from 'inquirer';
import { useTemplates } from './template';
import { COMPONENT_ROOT } from './const';
import { outputFileSync } from 'fs-extra';

const useComponentName = (name: string) => {
  const kebabCaseName = dashify(name);
  const camelCaseName = camelcase(name);
  return {
    kebabCaseName,
    camelCaseName
  }
}

async function app(){
  const {rawName} = await inquirer.prompt([
    {
      name: 'rawName',
      message: '组件名称',
      type: 'input'
    }
  ]);
  const {kebabCaseName, camelCaseName} = useComponentName(rawName);
  for (const [path, code] of useTemplates(COMPONENT_ROOT, kebabCaseName, camelCaseName)){
    outputFileSync(path, code)
  }
}

app()
.then(()=>{})