import { PropsTypeOptional } from "@qwqui/tools";
import { createContext } from "react";
import { Range, ScreenSize } from "./common.props";

export type GridContextState = {
  /**
    * @zh 总列数
    * @en Total number of columns
    * @default 24
  */
  cols?: number;

  /**
   * @zh 当前所处的断点
   * @en current breakpoint
   */
  currentSize?: string;
}

export type GridProps = Exclude<PropsTypeOptional, 'w'|'h'> & {
  /**
   * @zh 总列数
   * @en Total number of columns
   * @default 24
   */
  cols?: number;
  /**
   * @zh 行与行之间的间隔
   * @en Gap of row-to-row
   * @default 0
   */
  rowGap?: number;


  /**
   * @zh 精简网格下, 列于列之间的间距
   * @en Gap of col-to-col when not `Grid.Row` Subcomponent
   * @default 0
   */
  colGap?: number;

  /**
   * @zh 额外的断点大小, (minWidth,maxWidth]
   * @en Extra breakpoint size, (minWidth,maxWidth]
   */
  externalSizes?: {
    [x:string]: Range;
  }
}  & {
  [size in ScreenSize]?: number;
}  & {
  // screen size (px)
  [size: number]: number;
}
export type AutoGridContextState = {
  setFlow?: React.Dispatch<React.SetStateAction<'column' | 'row'>>;
  setUnSimpleMode?: () => void
}
export const AutoGridContext = createContext<AutoGridContextState>({});
export const GridContext = createContext<GridContextState>({});