import { PropsTypeOptional } from "@qwqui/tools";
import { ResponsiveValue } from "./grid.props";

export type ColProps = Exclude<PropsTypeOptional, 'w' | 'h'> & {
  /**
   * @zh 栅格占位格数
   * @en Raster number of cells to occupy
   * @default 0
   */
  span?: ResponsiveValue | number;
  /**
   * @zh 栅格向右移动大小,小于零则为向左移动
   * @en The number of cells that move the grid to the right, if it is less than zero, it moves to the left
   * @default 0
   */
  offset?: number;
  /**
   * @zh flex属性值
   * @en Flex attribute value
   * @default undefined
   */
  flex?: string | ResponsiveValue<string>;
}