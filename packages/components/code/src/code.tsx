import {factory} from '@qwqui/tools';
import { CodeContext } from './code-context';
import { CodeWrapper } from './code.types';

export const code = factory<CodeWrapper>((props)=>{
  return (
    <CodeContext.Provider value={{codeFiles: []}}>
      {props.children}
    </CodeContext.Provider>
  )
}, 'Code');