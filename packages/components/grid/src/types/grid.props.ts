import { PropsTypeOptional } from "@qwqui/tools";
import { createContext } from "react";

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
   * @default 24
   */
  rowGap?: number;
}

export const GridContext = createContext<GridContextState>({});