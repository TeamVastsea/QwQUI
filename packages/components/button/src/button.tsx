import React from 'react';
import './style.scss'

export const Button = (props: ButtonProps) => {
  return (
    <button>
      {props.children}
    </button>
  )
}

export interface ButtonProps {
  color?: string,
  variant?: string,
  children: React.ReactNode,
}