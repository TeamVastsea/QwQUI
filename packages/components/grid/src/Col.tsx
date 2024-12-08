import { factory } from "@qwqui/tools";
import { ColProps } from "./types/col.props";
import React, { useContext, useEffect, useState } from "react";
import { GridContext } from "./types/grid.props";
import { RowContext } from "./Row";

const getDisplay = (span: number | 'auto',flex?:string) => {
  return span === 'auto' ? 'block' : (span === 0 && !flex) ? 'none' : 'block';
}

export const Col:React.FC<ColProps> = factory<ColProps>((props)=>{
  const {cols, currentSize} = useContext(GridContext);
  const {gap} = useContext(RowContext);
  const {
    children,
    className,
    style,
    span=0,
    flex,
    offset:propsOffset=0,
    ...sizes
  } = props;
  const [_span, setSpan] = useState(span);
  const [width, setWidth] = useState('');
  const [offset, setOffset] = useState('')
  const [display, setDisplay] = useState(
    getDisplay(_span)
  );
  useEffect(()=>{
    if (_span === 'auto') {
      setWidth('auto');
      return;
    }
    setWidth(`${(_span / cols)*100}%`)
    setOffset(`${(propsOffset / cols) * 100}%`)
    setDisplay(getDisplay(_span,flex));
  }, [_span, cols, offset, propsOffset,flex])
  useEffect(()=>{
    if (sizes[currentSize] === undefined){
      setSpan(span);
      return;
    }
    setSpan(sizes[currentSize])
  }, [currentSize, sizes, span]);
  useEffect(()=>{
    setSpan(span);
  }, [span]);
  return (
    <div className={className} style={{
      ...style,
      'width': width,
      flex: flex ?? `0 0 ${width}`,
      marginLeft: offset,
      display: display,
      paddingLeft: `${gap/2}px`,
      paddingRight: `${gap/2}px`
    }}>
      {children}
    </div>
  )
}, 'Grid.Col')