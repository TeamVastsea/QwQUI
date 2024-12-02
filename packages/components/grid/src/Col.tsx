import { factory } from "@qwqui/tools";
import { ColProps } from "./types/col.props";
import React, { useContext, useEffect, useState } from "react";
import { GridContext } from "./types/grid.props";
import { RowContext } from "./Row";

export const Col:React.FC<ColProps> = factory<ColProps>((props)=>{
  const {cols} = useContext(GridContext);
  const {gap} = useContext(RowContext);
  const {children,className,style, span=cols,flex} = props;
  const [width, setWidth] = useState('');
  useEffect(()=>{
    if (span === 'auto') {
      setWidth('auto');
      return;
    }
    setWidth(`${(span / cols)*100}%`)
  }, [span,cols])
  return (
    <div style={{
      ...style,
      'width': width,
      flex: flex ?? `0 0 ${width}`,
      display: 'block',
      paddingLeft: `${gap/2}px`,
      paddingRight: `${gap/2}px`
    }}>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}, 'Grid.Col')