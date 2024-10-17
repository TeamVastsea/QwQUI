import React, { useContext, useEffect, useRef } from "react";
import style from './styles/header.module.scss';
import { CodeContext, CodeContextType } from "./code-context";
import {resolveCssVar} from '@qwqui/tools';
import { CopyIcon } from "./copy";

interface CodeItemProps {
  name: string;
  icon: React.ReactNode;
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  onClick?: (name: string)=>void
}

const CodeItem = ({name, icon, onMouseEnter, onMouseLeave,onClick}:CodeItemProps) => {
  const item = useRef<HTMLDivElement>(null);
  const {setWidth,setX, activeCode, setPrevWidth, setPrevX,x,width} = useContext<CodeContextType>(CodeContext);
  useEffect(()=>{
    if (name === activeCode){
      setPrevWidth(width);
      setPrevX(x)
      const currentWidth = item.current.offsetWidth;
      const currentX = item.current.offsetLeft
      setWidth(currentWidth + 6);
      setX(currentX - 3);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, activeCode, setWidth, setX]);
  const handleClick = () => {
    onClick?.(name);
  }
  return (
    <div 
      className={style['root__items-wrapper__item']}
      data-name={name}
      ref={item}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      {icon}
      <span>{name}</span>
    </div>
  )
};

const TrafficLight = () => {
  return (
    <div className={style['traffic-light']}>
      <div className={style['traffic-light__red']}></div>
      <div className={style['traffic-light__yellow']}></div>
      <div className={style['traffic-light__green']}></div>
    </div>
  )
}

export const CodeHeader = () => {
  const {
    codeFiles,
    x,
    width,
    setX,
    setWidth,
    prevX,
    prevWidth,
    setPrevWidth,
    setPrevX,
    activeCode,
    setActiveCode
  } = useContext<CodeContextType>(CodeContext);
  useEffect(()=>{
    console.log(x,width)
  },[x,width]);
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
  const copyActiveCode = () => {
    const activeFile = codeFiles.filter(file =>file.name === activeCode)[0];
    if (!activeFile) {
      return;
    }
    navigator.clipboard.writeText(activeFile.code);
  }
  const changeActive = (name: string) => {
    setPrevX(x);
    setPrevWidth(width);
    setActiveCode(name);
  }
  return (
    <div className={style.root}>
      <TrafficLight />
      <div className={style['root__items-wrapper']}>
        {
          codeFiles.map((item) => {
            return (
              <CodeItem
                name={item.name}
                icon={item.icon}
                key={item.name}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={changeActive}
              />
            )
          })
        }
      </div>
      <CopyIcon className={style.copy} onClick={copyActiveCode} />
      <div className={style['root__active_block']} style={vars}></div>
    </div>
  )
}