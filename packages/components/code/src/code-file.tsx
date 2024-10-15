import {factory} from '@qwqui/tools';
import { CodeFileProps } from './code.types';
import { useContext, useEffect } from 'react';
import { CodeContext, CodeContextType } from './code-context';

const hasCode = (name: string, code: string, codeFiles: CodeFileProps[]) => {
  return codeFiles.some((codeFile) => {
    return codeFile.name ===name && codeFile.code === code
  })
}

export const CodeFile = factory<CodeFileProps>((props) => {
  const {codeFiles, setCodeFiles} = useContext<CodeContextType>(CodeContext);
  const {name, code} = props;
  useEffect(()=>{
    if (!hasCode(name, code, codeFiles)){
      setCodeFiles([
        ...codeFiles,
        {name, code}
      ])
    }
  }, [name, code, codeFiles, setCodeFiles])
  return (
    <></>
  )
}, 'CodeFile');