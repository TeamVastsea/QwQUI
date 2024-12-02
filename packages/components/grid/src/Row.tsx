import {factory} from '@qwqui/tools';
import React, { createContext, CSSProperties, useContext, useEffect, useState } from 'react';
import { RowProps } from './types/row.props';
import { GridContext } from './types/grid.props';
import styles from './styles/row.module.scss';

export type RowContextState = {
  gap?: number;
}
export const RowContext = createContext<RowContextState>({});

export const Row:React.FC<RowProps> = factory<RowProps>((props)=>{
  const {
    children,
    className,
    gap
  } = props;
  const {cols} = useContext(GridContext)
  const [cssVars, setCssVars]  = useState<CSSProperties>({
    '--grid-row-cols': cols
  } as CSSProperties)
  useEffect(()=>{
    setCssVars({
      ...cssVars,
      '--grid-row-cols': cols,
      '--grid-row-gap': gap
    } as CSSProperties)
  }, [cols]);
  const classes = [className, styles.row].join(' ');
  return (
    <div style={{
        ...cssVars,
      }}
      className={classes}
    >
      <RowContext.Provider value={{
        gap
      }}>
        {children}
      </RowContext.Provider>
    </div>
  )
}, 'Grid.row');