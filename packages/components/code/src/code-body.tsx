import { useContext, useEffect,useRef,useState } from "react"
import { CodeContext, CodeContextType } from "./code-context"
import style from './styles/code-body.module.scss';
import './styles/hack.css';
import {darkTheme} from './dark-theme'
import {noColorTheme} from './no-colored'
import { useHighlightCode} from "./hooks/useParser";
import { CodeFileProps } from "./code.types";

export const CodeBody = () => {
  const {activeCode,codeFiles, cache, setCache,init, showRow, colored} = useContext<CodeContextType>(CodeContext);
  const [codeLanguage, setCodeLanguage] = useState('');
  const [activeCodeFile, setActvieCodeFile] = useState<CodeFileProps>();
  const [hidden, setHidden] = useState(false);
  const codeBodyDom = useRef<HTMLDivElement>();
  useEffect(()=>{
    const [codeFile] = codeFiles.filter((file) => file.name === activeCode);
    if (!codeFile){
      return;
    }
    setActvieCodeFile(codeFile);
    setCodeLanguage(codeFile.language);
  }, [activeCode, codeFiles]);
  const {html,loading} = useHighlightCode(activeCodeFile, cache, setCache, {
    langs: [codeLanguage],
    themes:[],
  }, [darkTheme as unknown as Record<string,string>, noColorTheme as unknown as Record<string,string>], showRow, colored);
  useEffect(()=>{
    if(!codeBodyDom.current && loading){
      return;
    }
    setHidden(true);
    const ele = codeBodyDom.current;
    const lastChild= ele.querySelectorAll('code > span:last-child > :first-child')[0];
    if (lastChild){
      const width = (lastChild as HTMLElement).offsetWidth;
      ele.style['--line-number-width']=`${width}px`;
      ele.style.setProperty('--line-number-width', `${width}px`)
    }
    setHidden(false);
  },[init, loading]);
  return  (
    <div ref={codeBodyDom} aria-hidden={hidden} className={style.root} dangerouslySetInnerHTML={{__html: html}}></div>
  )
}
