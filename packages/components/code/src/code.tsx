import { CodeContext } from './code-context';
import { CodeFileProps, CodeWrapper } from './code.types';
import { CodeHeader } from './code-header';
import { useEffect, useState } from 'react';
import style from './styles/code-wrapper.module.scss';
import { CodeBody } from './code-body';

export const Code = (props:CodeWrapper)=>{
  const [codeFiles, setCodeFiles] = useState<CodeFileProps[]>([]);
  const [activeCode, setActiveCode] = useState('');
  const [x, setX] = useState(0);
  const [width, setWidth] = useState(72);
  const [prevX,setPrevX] = useState();
  const [prevWidth, setPrevWidth] = useState();
  const [cache, setCache] = useState({});
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
      setPrevWidth,
      cache,
      setCache,
      showRow: props.showRow,
      colored: props.isColored ?? true,
      mode: props.mode ?? 'dark'
    }}>
      <div className={style.root} data-theme={props.mode ?? 'dark'}>
        <CodeHeader showCopy={props.showCopy} showTrafficLight={props.showTrafficLight ?? true} />
        <CodeBody />
        {props.children}
      </div>
    </CodeContext.Provider>
  )
}