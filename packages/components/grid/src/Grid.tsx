import { factory } from "@qwqui/tools";
import { GridProps,GridContext, AutoGridContext } from "./types/grid.props";
import React, { CSSProperties, useEffect, useState} from "react";
import styles from './styles/grid.module.scss';
import { useScreenSize } from "./hooks/useScreenSize";
import { Row } from "./Row";
import { Col } from "./Col";

export const Grid = factory<GridProps, {Row:typeof Row,Col:typeof Col}>((props) => {
  const {children, className, style, rowGap=0} = props;
  const [flow, setFlow] = useState<'column' | 'row'>('row');
  const [simpleGrid, setSimpleGrid] = useState(true);
  const classes = [
    className,
    styles.grid
  ].join(' ');
  const {currentSize} = useScreenSize();
  const [cols, setCols] = useState(props.cols ?? 24)

  const unSimpleGrid = () => setSimpleGrid(false);

  useEffect(()=>{
    if (props[currentSize]){
      setCols(props[currentSize]);
    }
  }, [currentSize]);
  return (
    <div style={{
      ...style,
      '--grid-row-gap': rowGap,
      '--grid-wrap': simpleGrid ? 'wrap' : '',
      '--grid-flow': flow,
      '--grid-col-gap': simpleGrid ? props.colGap : 0
    } as CSSProperties} className={classes}>
      <AutoGridContext.Provider value={{
        setFlow,
        setUnSimpleMode: unSimpleGrid
      }}>
        <GridContext.Provider value={{
          cols
        }}>
          {children}
        </GridContext.Provider>
      </AutoGridContext.Provider>
    </div>
  )
},'Grid', {Row,Col})
