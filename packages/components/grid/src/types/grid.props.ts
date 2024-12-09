import { PropsTypeOptional } from "@qwqui/tools";
import { createContext } from "react";

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

  rowGap?: number;
  colGap?: number;
}
export type BreakpointLiteral = `${number}px` | `${number}` | number

export type DefaultBreakPoints = 'xs'|'sm'|'md'|'lg'|'xl'|'xxl';
export type BreakPoints = {
  [breakpoint in DefaultBreakPoints]?: BreakpointLiteral
} & {
  [x:string]: BreakpointLiteral
}

export type ResponsiveValue<T=number> = {
  [breakpoint in DefaultBreakPoints]?: T;
} & {
  [x:string]: T;
} & {
  base: T;
}

export type GridProps<BPS=Partial<BreakPoints>> = {
  breakpoints: BPS;
  cols: ResponsiveValue | number;
  verticalSpcing: ResponsiveValue | number;
  horizontalSpacing: ResponsiveValue | number;
  onBreakPoint: (breakpoint: string) => void;
} & Exclude<PropsTypeOptional, 'w' | 'h'>


export type AutoGridContextState = {
  setUnSimpleMode?: () => void
}
export const AutoGridContext = createContext<AutoGridContextState>({});
export const GridContext = createContext<GridContextState>({});