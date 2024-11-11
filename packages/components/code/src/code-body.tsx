import { useContext, useEffect,useRef,useState } from "react"
import { CodeContext, CodeContextType } from "./code-context"
import style from './styles/code-body.module.scss';
import './styles/hack.css';
import {darkTheme} from './dark-theme'
import {lightTheme} from './light-theme'
import {noColorTheme} from './no-colored'
import { useHighlightCode} from "./hooks/useParser";
import { CodeFileProps } from "./code.types";

export const CodeBody = () => {
  const {activeCode,codeFiles, showRow, colored, mode} = useContext<CodeContextType>(CodeContext);
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
  const {nodes,loading} = useHighlightCode(activeCodeFile, {
    langs: [codeLanguage],
    themes: [],
  }, [
    darkTheme as unknown as Record<string,string>,
    noColorTheme as unknown as Record<string,string>,
    lightTheme as unknown as Record<string,string>,
  ], showRow, colored, mode);
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
  },[loading]);
  return  (
    <div ref={codeBodyDom} aria-hidden={hidden} className={style.root} data-theme={mode}>
      {!hidden ? nodes : null}
    </div>
  )
}
