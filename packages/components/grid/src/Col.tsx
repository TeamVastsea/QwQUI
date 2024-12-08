import { factory } from "@qwqui/tools";
import { ColProps } from "./types/col.props";
import React, { useContext, useEffect, useState } from "react";
import { GridContext } from "./types/grid.props";
import { RowContext } from "./Row";

const getDisplay = (span: number | 'auto') => {
  return span === 'auto' ? 'block' : span > 0 ? 'block' : 'none';
}

export const Col:React.FC<ColProps> = factory<ColProps>((props)=>{
  const {cols} = useContext(GridContext);
  const {gap} = useContext(RowContext);
  const {children,className,style, span=0, flex, offset:propsOffset=0} = props;
  const [width, setWidth] = useState('');
  const [offset, setOffset] = useState('')
  const [display, setDisplay] = useState(
    getDisplay(span)
  );
  useEffect(()=>{
    if (span === 'auto') {
      setWidth('auto');
      return;
    }
    setWidth(`${(span / cols)*100}%`)
    setOffset(`${(propsOffset / cols) * 100}%`)
    setDisplay(getDisplay(span));
  }, [span,cols,offset])
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