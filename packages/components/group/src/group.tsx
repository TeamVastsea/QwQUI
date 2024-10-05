import React, { CSSProperties } from 'react';
import style from './group.module.scss';

const resolveVar = (props: Omit<GroupProps, 'children'>) => {
  return {
    '--group-wrap': props.wrap,
    '--group-justify': props.justify,
    '--group-align': props.align,
    '--group-gap': `${props.gap}px`,
    '--group-child-width': '',
    '--group-h': props.h ? `${props.h}px` : undefined
  } as CSSProperties
}

const filterChildren = (children: React.ReactNode) => React.Children.toArray(children).filter(Boolean);
const DEFAULT_PROPS: Partial<GroupProps> = {
  wrap: 'wrap',
  justify: 'start',
  align: 'start',
  gap: 0,
}
export const Group = (props: GroupProps) => {
  const children = filterChildren(props.children);
  const vars = resolveVar({
    ...DEFAULT_PROPS,
    ...props,
  });
  const childrenCount = children.length;
  const childWidth = `calc(${100 / childrenCount}% - ${props.gap - props.gap / childrenCount})`
  vars['--group-child-width'] = childWidth;
  return (
    <div
      className={[style.root, props.className ?? ''].join(' ')}
      style={{
        ...vars,
        ...props.style
      }}
      data-grow={props.grow}
    >
      {children}
    </div>
  )
}

export type GroupAlign = 'center' | 'start' | 'end';
export type GroupJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';

export interface GroupProps {
  gap?: number;
  align?: GroupAlign;
  justify?: GroupJustify;
  className?: string;
  children?: React.ReactNode;
  h?: number;
  style?: CSSProperties;
  grow?: boolean;
  wrap?: CSSProperties['flexWrap'];
}