import { useContext, useEffect, useMemo, useState } from "react"
import { createHighlighter } from 'shiki';
import { CodeContext, CodeContextType } from "./code-context"
import style from './styles/code-body.module.scss';
import './styles/hack.css';
import {darkTheme} from './dark-theme'

export const CodeBody = () => {
  const {activeCode,codeFiles, cache} = useContext<CodeContextType>(CodeContext);
  const [code, setCode] = useState('');
  const [codeLanguage, setCodeLanguage] = useState('');
  useEffect(()=>{
    const [codeFile] = codeFiles.filter((file) => file.name === activeCode);
    if (!codeFile){
      return;
    }
    setCode(codeFile.code);
    setCodeLanguage(codeFile.language);
  }, [activeCode, codeFiles]);
  const [html, setHTML] = useState('');
  useMemo(async ()=>{
    if (cache.has(code)) {
      return cache.get(code);
    }
    const highLighter = await createHighlighter({
      langs: [codeLanguage],
      themes: []
    });
    await highLighter.loadTheme(darkTheme as unknown as Record<string, string>);
    const html = highLighter.codeToHtml(code, {
      lang: codeLanguage,
      theme: 'dark-theme'
    })
    setHTML(html);
    cache.set(code, html);
    highLighter.dispose()
  }, [code, codeLanguage]);
  return  (
    <div className={style.root} dangerouslySetInnerHTML={{__html: html}}></div>
  )
}
