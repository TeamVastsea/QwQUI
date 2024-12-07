import { PropsTypeOptional } from "@qwqui/tools";
import { createContext } from "react";
import { ScreenSize } from "./common.props";

export type GridContextState = {
  /**
    * @zh 总列数
    * @en Total number of columns
    * @default 24
  */
  cols?: number;
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
}  & {
  [size in ScreenSize]?: number;
}
export type AutoGridContextState = {
  setWrap?: React.Dispatch<React.SetStateAction<boolean>>
}
export const AutoGridContext = createContext<AutoGridContextState>({});
export const GridContext = createContext<GridContextState>({});