import React, { CSSProperties } from 'react';
import stackStyle from './stack.module.scss';

const vars = (props: Omit<StackProps, 'children'>) => {
  return {
    '--stack-gap': `${props.gap}px`,
    '--stack-align': props.align,
    '--stack-justify': props.justify,
    '--stack-height': props.h ? `${props.h}px` : ''
  } as React.CSSProperties
}

export const Stack = (
  props: StackProps
) => {
  const stackStyleVar = vars({
    gap: 0,
    justify: 'start',
    align: 'start',
    className: '',
    ...props
  });
  return (
    <div
      className={[stackStyle.root, props.className].join(' ')}
      style={{
        ...stackStyleVar,
        ...props.style
      }}
    >
      {props.children}
    </div>
  )
}

export type StackAlign = 'stretch' | 'center' | 'start' | 'end';
export type StackJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'evenly';

export interface StackProps {
  gap?: number;
  align?: 'stretch' | 'center' | 'start' | 'end';
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'evenly';
  className?: string;
  children?: React.ReactNode;
  h?: number;
  style?: CSSProperties
}

Stack.displayName = '@qwqui/layout/Stack'