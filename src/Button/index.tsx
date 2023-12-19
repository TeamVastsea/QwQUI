import React from 'react';

export type ButtonProp = {
  /**
   * @description 属性描述
   * @default "默认值"
   */
  size?: number,
  children: React.ReactNode,
  onClick?: () => void,
}

export default function Button(props: ButtonProp) {
  return(
    <p>
      <button onClick={props.onClick} type={"button"}>{props.children}</button>
    </p>
  )
}
