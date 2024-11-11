import { CodeContext } from './code-context';
import { CodeFileProps, CodeWrapper } from './code.types';
import { CodeHeader } from './code-header';
import { useEffect, useState } from 'react';
import style from './styles/code-wrapper.module.scss';
import { CodeBody } from './code-body';

const DEFAULT_PROPS:CodeWrapper = {
  mode: 'dark',
  showRow: false,
  showCopy: false,
  showTrafficLight: true,
  logo: null,
  isColored: true,
}

export const Code = (props:CodeWrapper)=>{
  const _props = {
    ...DEFAULT_PROPS,
    ...props,
  }
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
      showRow: _props.showRow,
      colored: _props.isColored,
      mode: _props.mode,
    }}>
      <div className={style.root} data-theme={_props.mode}>
        <CodeHeader showCopy={_props.showCopy} showTrafficLight={_props.showTrafficLight} />
        <CodeBody />
        {props.children}
      </div>
    </CodeContext.Provider>
  )
}