import { factory } from "@qwqui/tools";
import { GridProps,GridContext, AutoGridContext } from "./types/grid.props";
import React, { CSSProperties, useEffect, useState} from "react";
import styles from './styles/grid.module.scss';
import { useScreenSize } from "./hooks/useScreenSize";

export const Grid:React.FC<GridProps> = factory<GridProps>((props) => {
  const {children, className, style, rowGap=0} = props;
  const [wrap, setWrap] = useState<boolean>(true);
  const classes = [
    className,
    styles.grid
  ].join(' ');
  const {currentSize} = useScreenSize();
  const [cols, setCols] = useState(props.cols ?? 24)
  useEffect(()=>{
    if (props[currentSize]){
      setCols(props[currentSize]);
    }
  }, [currentSize]);
  return (
    <div style={{
      ...style,
      '--grid-row-gap': rowGap,
      '--grid-wrap': wrap
    } as CSSProperties} className={classes}>
      <AutoGridContext.Provider value={{
        setWrap
      }}>
        <GridContext.Provider value={{
          cols
        }}>
          {children}
        </GridContext.Provider>
      </AutoGridContext.Provider>
    </div>
  )
},'Grid')