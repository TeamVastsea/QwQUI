import './styles/button.css';
import React from 'react';
export type ButtonSize = "sm" | "md" | "lg"
export type ButtonProp = {
  /**
   * @description 组件大小
   * @default "md"
   */
  size?: ButtonSize,
  children: React.ReactNode,
  /**
   * @description 是否为块级元素
   */
  block?: boolean
  /**
   * @description 是否撑满父容器
   */
  fill?: boolean
  /**
   * @description 点击事件
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button(props: ButtonProp) {
  return(
    <button
      className={
        `btn btn--${props.size === undefined ? "md" : props.size} ${props.block && 'btn--block'} ${props.fill && 'btn--fill'}`}
        type={"button"}
        onClick={props.onClick}
      >
      {props.children}
    </button>
  )
}
