import { factory } from "@qwqui/tools";
import { GridProps,GridContext } from "./types/grid.props";
import React from "react";

export const Grid:React.FC<GridProps> = factory<GridProps>((props) => {
  const {children, cols=24, className, style} = props;
  return (
    <div style={style} className={className}>
      <GridContext.Provider value={{
        cols
      }}>
        {children}
      </GridContext.Provider>
    </div>
  )
},'Grid')