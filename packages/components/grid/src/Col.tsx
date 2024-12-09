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
  const [_span, setSpan] = useState(typeof span === 'number' ? span : span[currentSize] ?? (span['base'] || 0));
  const [width, setWidth] = useState('');
  const [offset, setOffset] = useState('')
  const [display, setDisplay] = useState(
    getDisplay(_span)
  );
  useEffect(()=>{
    setWidth(`${(_span / cols)*100}%`)
    setOffset(`${(propsOffset / cols) * 100}%`)
    setDisplay(
      getDisplay(
        _span,
        typeof flex === 'string' ? flex : flex?.[currentSize] ?? flex?.['base'] ?? `0 0 ${width}`
      )
    );
  }, [_span, cols, offset, propsOffset, flex, currentSize, width])
  useEffect(()=>{
    if (typeof span === 'number'){
      setSpan(span);
      return
    }
    if (span[currentSize] == null){
      if (span?.['base'] == null){
        return;
      }
      setSpan(span['base']);
      return;
    }
    setSpan(span[currentSize]);
  }, [currentSize, sizes, span]);
  useEffect(()=>{
    setSpan(typeof span === 'number' ? span : span[currentSize] ?? (span['base'] || 0));
  }, [span,currentSize]);
  return (
    <div className={className} style={{
      ...style,
      'width': width,
      flex: typeof flex === 'string' ? flex : flex?.[currentSize] ?? flex?.['base'] ?? `0 0 ${width}`,
      marginLeft: offset,
      display: display,
      paddingLeft: `${gap/2}px`,
      paddingRight: `${gap/2}px`
    }}>
      {children}
    </div>
  )
}, 'Grid.Col')