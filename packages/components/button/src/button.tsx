import React from 'react';
import classes from './button.module.scss';

export const Button = (props: ButtonProps) => {
  const size = props.size || 'md';
  const color = props.color || 'blue';
  const getRadius = () => {
    if (props.radius != undefined) {
      return props.radius;
    }

    if (props.size == 'md' || props.size == 'lg') {
      return 'lg';
    }

    if (props.size == 'xl') {
      return 'xl';
    }
    return 'md';
  }
  const clickHandler = () => {
    if (props.onClick == null || props.disabled) {
      return;
    }

    props.onClick();
  }

  return (
    <div className={classes.root}>
      <button
        onClick={clickHandler}
        className={classes.button}
        style={{
          cursor: props.disabled ? 'not-allowed' : 'pointer',
          height: `var(--button-height-${size})`,
          padding: `0 var(--button-padding-${size})`,
          borderRadius: `var(--button-radius-${getRadius()})`,
          fontSize: `var(--button-font-size-${size})`,
          fontWeight: props.strong ? 800 : 600,
          '--background-color': props.disabled ? 'var(--gray-300)' : `var(--${color}-300)`,
          '--background-color-hover': props.disabled ? 'var(--gray-300)' : `var(--${color}-200)`,
          '--background-color-active': props.disabled ? 'var(--gray-300)' : `var(--${color}-400)`,
          '--color': props.disabled ? 'var(--gray-500)' : `var(--${color}-900)`,
          '--color-hover': props.disabled ? 'var(--gray-500)' : `var(--${color}-600)`,
          '--color-active': props.disabled ? 'var(--gray-500)' : `var(--${color}-900)`,
        } as React.CSSProperties}>
        {props.children}
      </button>
    </div>
  );
}


export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  color?: 'gray' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo'
    | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange';
  strong?: boolean;
}
