import { useContext, useEffect,useState } from "react"
import { CodeContext, CodeContextType } from "./code-context"
import style from './styles/code-body.module.scss';
import './styles/hack.css';
import {darkTheme} from './dark-theme'
import { useHighlightCode} from "./hooks/useParser";
import { CodeFileProps } from "./code.types";

export const CodeBody = () => {
  const {activeCode,codeFiles, cache, setCache} = useContext<CodeContextType>(CodeContext);
  const [codeLanguage, setCodeLanguage] = useState('');
  const [activeCodeFile, setActvieCodeFile] = useState<CodeFileProps>();
  useEffect(()=>{
    const [codeFile] = codeFiles.filter((file) => file.name === activeCode);
    if (!codeFile){
      return;
    }
    setActvieCodeFile(codeFile);
    setCodeLanguage(codeFile.language);
  }, [activeCode, codeFiles]);
  const {html} = useHighlightCode(activeCodeFile, cache, setCache, {
    langs: [codeLanguage],
    themes:[],
  }, [darkTheme as unknown as Record<string,string>]);
  return  (
    <div className={style.root} dangerouslySetInnerHTML={{__html: html}}></div>
  )
}
