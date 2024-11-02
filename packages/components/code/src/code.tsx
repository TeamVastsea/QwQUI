import {factory} from '@qwqui/tools';
import { CodeContext } from './code-context';
import { CodeFileProps, CodeWrapper } from './code.types';
import { CodeHeader } from './code-header';
import { useEffect, useMemo, useState } from 'react';
import style from './styles/code-wrapper.module.scss';
import { CodeBody } from './code-body';
import { useHighligther } from './hooks/useParser';
import { darkTheme } from './dark-theme';

export const Code = factory<CodeWrapper>((props)=>{
  const [loading, setLoading] = useState(false);
  const [codeFiles, setCodeFiles] = useState<CodeFileProps[]>([]);
  const [activeCode, setActiveCode] = useState('');
  const [x, setX] = useState(0);
  const [width, setWidth] = useState(72);
  const [prevX,setPrevX] = useState();
  const [prevWidth, setPrevWidth] = useState();
  const [cache, setCache] = useState({});
  const [init, setInit] = useState(true);
  useEffect(()=>{
    if (codeFiles[0]){
      setActiveCode(codeFiles[0].name);
    }
  }, [codeFiles]);
  useEffect(()=>{
    setLoading(true)
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        setLoading(false)
      })
    })
  }, [activeCode])
  useMemo(async ()=>{
    if (codeFiles.length>1){
      return;
    }
    setLoading(true)
    setInit(true)
    const languages=codeFiles.map(file => file.language);
    const hl = await useHighligther({
      langs: languages,
      themes: [],
    }, [darkTheme as unknown as Record<string, string>])
    const tmpCache = {};
    for (const file of codeFiles) {
      const {name, code, language} = file;
      tmpCache[name] = hl.codeToHtml(code, {
        lang: language,
        theme: 'dark-theme',
      });
    }
    setCache(tmpCache);
    hl.dispose()
    setInit(false)
    setLoading(false)
  }, [codeFiles])
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
      init
    }}>
      <div className={style.root}>
        <CodeHeader />
        {!loading && <CodeBody />}
        {!loading && props.children}
      </div>
    </CodeContext.Provider>
  )
}, 'Code');