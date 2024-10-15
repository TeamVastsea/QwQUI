import {factory} from '@qwqui/tools';
import { CodeContext } from './code-context';
import { CodeFileProps, CodeWrapper } from './code.types';
import { CodeHeader } from './code-header';
import { useEffect, useState } from 'react';
import style from './styles/code-wrapper.module.scss';

export const Code = factory<CodeWrapper>((props)=>{
  const [codeFiles, setCodeFiles] = useState<CodeFileProps[]>([]);
  const [activeCode, setActiveCode] = useState('');
  const [x, setX] = useState(0);
  const [width, setWidth] = useState(72);
  const [prevX,setPrevX] = useState();
  const [prevWidth, setPrevWidth] = useState();
  useEffect(()=>{
    if (codeFiles[0]){
      setActiveCode(codeFiles[0].name);
    }
  }, [codeFiles]);
  return (
    <CodeContext.Provider value={{
      codeFiles,
      setCodeFiles,
      activeCode,
      setActiveCode,
      x,
      width,
      setX,
      setWidth,
      prevX,
      setPrevX,
      prevWidth,
      setPrevWidth
    }}>
      <div className={style.root}>
        <CodeHeader />
        {props.children}
      </div>
    </CodeContext.Provider>
  )
}, 'Code');