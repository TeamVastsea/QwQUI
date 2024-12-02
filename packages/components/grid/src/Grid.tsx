import { factory } from "@qwqui/tools";
import { GridProps,GridContext } from "./types/grid.props";
import React, { CSSProperties } from "react";
import styles from './styles/grid.module.scss';

export const Grid:React.FC<GridProps> = factory<GridProps>((props) => {
  const {children, cols=24, className, style, rowGap=0} = props;
  const classes = [
    className,
    styles.grid
  ].join(' ');
  return (
    <div style={{
      ...style,
      '--grid-row-gap': rowGap
    } as CSSProperties} className={classes}>
      <GridContext.Provider value={{
        cols
      }}>
        {children}
      </GridContext.Provider>
    </div>
  )
},'Grid')