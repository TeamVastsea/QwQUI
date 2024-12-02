import { PropsTypeOptional } from "@qwqui/tools";

export type RowProps = Exclude<PropsTypeOptional, 'w' | 'h'> & {
  /**
   * @zh 水平对齐方式
   * @en justify content
   * @default start
   */
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
  /**
   * @zh 垂直对局方式
   * @en align-items
   * @default start
   */
  align?: 'start' | 'center' | 'end' | 'stretch'

  /**
   * @zh Col是否允许换行
   * @en Whether Col can wrap onto multiple lines
   * @default false
   */
  wrap?: boolean;
  
  /**
   * @zh 列与列之间的间距
   * @en The spacing between columns
   * @default 24
   */
  gap?: number;
}