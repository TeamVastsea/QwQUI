import React, { CSSProperties } from 'react';
import stackStyle from './stack.module.scss';
import { factory, resolveCssVar } from '@qwqui/tools';

interface StackVar {
  '--stack-gap': string;
  '--stack-align': string;
  '--stack-justify': string;
  '--stack-height': string
}

export const Stack:React.FC<StackProps> = factory<StackProps>((props) => {
  const stackStyleVar = resolveCssVar<'stack', StackProps, StackVar>('stack', {
    gap: 0,
    justify: 'start',
    align: 'start',
    className: '',
    ...props
  });
  stackStyleVar['--stack-gap'] = `${stackStyleVar['--stack-gap']}px`;
  stackStyleVar['--stack-h'] = `${stackStyleVar['--stack-h']}px`;
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
}, 'Stack')

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