import { factory } from "@qwqui/tools";
import { AutoGridContext, BreakpointLiteral, BreakPoints, GridContext, GridProps } from "./types/grid.props";
import styles from './styles/grid.module.scss';
import { Row } from "./Row";
import { Col } from "./Col";
import { useBreakpoints } from '@shined/react-use';
import { DEFAULT_BREAKPONITS } from "./constant";
import { CSSProperties, useEffect, useState } from "react";

const parseLiteral= (val: BreakpointLiteral):number => {
  return typeof val === 'string' ? Number.parseInt(val.replace('px','').trim()) : val;
}

const toBreakpoints = (breakpoints:BreakPoints) =>{
  return Object.entries(breakpoints)
  .map(([key,value]) => {
    return {
      [key]: parseLiteral(value)
    }
  })
  .reduce((pre,cur) => {
    return {
      ...pre,
      ...cur
    }
  }, {});
}

export const Grid = factory((props:Partial<GridProps>) => {
  const {
    children,
    className,
    cols:_cols=24
  } = props;

  const classes = [
    className,
    styles.grid
  ].join(' ')

  const {currents} = useBreakpoints({
    ...DEFAULT_BREAKPONITS,
    ...toBreakpoints(props.breakpoints ?? {})
  }, {
    strategy: 'min-width',
  })
  const [currentSize, setCurrent] = useState(currents.at(-1));
  const [cols, setCols] = useState(24);
  const [rowGap,setRowGap] = useState(props.verticalSpcing?.[currentSize] ?? 0);
  const [colGap, setColGap] = useState(props.horizontalSpacing?.[currentSize] ?? 0);
  const [simpleGrid, setSimpleGrid] = useState(true);
  const setUnSimpleMode = () => {
    setSimpleGrid(false);
  }
  useEffect(()=>{
    setCols(
      typeof _cols === 'number' ? (_cols ?? 24) : (_cols?.[currentSize] ?? _cols?.['base'] ?? 24)
    )
  }, [_cols, currentSize]);
  useEffect(()=>{
    setCurrent(currents.at(-1));
    if (!currents.at(-1) || props.cols?.[currents.at(-1)] == null){
      setCols(props.cols?.['base'] ?? 24)
      return;
    }
    setCols(
      props.cols[currents.at(-1)]
    );
  }, [currents, props.cols]);
  useEffect(()=>{
    // null == undefined -> true
    // null === undefined -> false
    // To avoid code collisions, eqeq is used here
    if(typeof props.verticalSpcing !== 'number' && props.verticalSpcing?.[currentSize] == null){
      return;
    }
    setRowGap(
      typeof props.verticalSpcing === 'number' ? props.verticalSpcing : 
      props.verticalSpcing?.[currentSize]
    )
    if (typeof props.horizontalSpacing !== 'number' && props.horizontalSpacing?.[currentSize] == null){
      return;
    }
    setColGap(
      typeof props.horizontalSpacing === 'number' ? props.horizontalSpacing :
      props.horizontalSpacing?.[currentSize]
    );
  }, [currentSize, props.verticalSpcing, props.horizontalSpacing])
  useEffect(()=>{
    props.onBreakPoint?.(currentSize);
  }, [currentSize]);
  return (
    <div
      className={classes}
      style={{
        ...styles,
        '--grid-row-gap': rowGap,
        '--grid-flow': simpleGrid ? 'row' : 'column',
        '--grid-wrap': simpleGrid ? 'wrap' : '',
        '--grid-col-gap': simpleGrid ? colGap : 0
      } as CSSProperties}
    >
      <AutoGridContext.Provider value={{
        setUnSimpleMode,
      }}>
        <GridContext.Provider value={{
          cols,
          currentSize,
          rowGap,
          colGap
        }}>
          {children}
        </GridContext.Provider>
      </AutoGridContext.Provider>
    </div>
  )
}, 'Grid', {Row, Col});


// export const Grid = factory<GridProps, {Row:typeof Row,Col:typeof Col}>((props) => {
//   const {children, className, style, rowGap=0} = props;
//   const [flow, setFlow] = useState<'column' | 'row'>('row');
//   const [simpleGrid, setSimpleGrid] = useState(true);
//   const classes = [
//     className,
//     styles.grid
//   ].join(' ');
//   const {currentSize} = useScreenSize({
//     externalSize: props.externalSizes
//   });
//   const [cols, setCols] = useState(props.cols ?? 24)

//   const unSimpleGrid = () => setSimpleGrid(false);

//   useEffect(()=>{
//     if (props[currentSize]){
//       setCols(props[currentSize]);
//     }
//   }, [currentSize]);
//   return (
//     <div style={{
//       ...style,
//       '--grid-row-gap': rowGap,
//       '--grid-wrap': simpleGrid ? 'wrap' : '',
//       '--grid-flow': flow,
//       '--grid-col-gap': simpleGrid ? props.colGap : 0
//     } as CSSProperties} className={classes}>
//       <AutoGridContext.Provider value={{
//         setFlow,
//         setUnSimpleMode: unSimpleGrid
//       }}>
//         <GridContext.Provider value={{
//           cols,
//           currentSize
//         }}>
//           {children}
//         </GridContext.Provider>
//       </AutoGridContext.Provider>
//     </div>
//   )
// },'Grid', {Row,Col})
