import React, { useContext, useEffect, useRef } from "react";
import style from './styles/header.module.scss';
import { CodeContext, CodeContextType } from "./code-context";
import {resolveCssVar} from '@qwqui/tools';

interface CodeItemProps {
  name: string;
  icon: React.ReactNode;
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
}

const CodeItem = ({name, icon, onMouseEnter, onMouseLeave}:CodeItemProps) => {
  const item = useRef<HTMLDivElement>(null);
  const {setWidth,setX, activeCode} = useContext<CodeContextType>(CodeContext);
  useEffect(()=>{
    if (name === activeCode){
      const width = item.current.offsetWidth;
      const x = item.current.offsetLeft
      setWidth(width + 6);
      setX(x - 3);
    }
  }, [name, activeCode, item, setWidth, setX]);
  return (
    <div 
      className={style.root__item}
      data-name={name}
      ref={item}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
      <span>{name}</span>
    </div>
  )
};

export const CodeHeader = () => {
  const {codeFiles, x, width, setX,setWidth, prevX, prevWidth, setPrevWidth, setPrevX} = useContext<CodeContextType>(CodeContext);
  const vars = resolveCssVar('active-block', {x, width})
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPrevX(x);
    setPrevWidth(width);
    const target = e.currentTarget;
    setX(target.offsetLeft - 3);
    setWidth(target.offsetWidth + 6);
  }
  const onMouseLeave = () => {
    setX(prevX);
    setWidth(prevWidth);
  }
  return (
    <div className={style.root}>
      {
        codeFiles.map((item) => {
          return (
            <CodeItem
              name={item.name}
              icon={item.icon}
              key={item.name}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          )
        })
      }
      <div className={style.root__active_block} style={vars}></div>
    </div>
  )
}