import React, { type FC } from 'react';

export type ButtonProp = {
  /**
   * @description 属性描述
   * @default "默认值"
   */
  size: 'xs' | 'sm' | 'md' | 'lg',
  children: React.ReactNode
}

const Button: FC<{
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string;
  children: React.ReactNode
}> = (props) => (
  <button type='button'>{props.children}</button>
);

export default Button;
