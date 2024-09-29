import React, {useEffect} from 'react';
import classes from './button.module.scss';

export const Button = (props: ButtonProps) => {
  const size = props.size || 'md';
  const getRadius = () => {
    if (props.radius != undefined) {
      return props.radius;
    }
    
    if (props.size == 'md' || props.size == 'lg') {
      return 'lg';
    }
    
    if (props.size == 'xl') {
      return 'xl'
    }
    return 'md';
  }

  return (
    <div className={classes.root}>
      <button
        className={classes.button}
        style={{
          height: `var(--button-height-${size})`,
          padding: `0 var(--button-padding-${size})`,
          borderRadius: `var(--button-radius-${getRadius()})`,
          fontSize: `var(--button-font-size-${size})`,
          fontWeight: 600
        }}>
        {props.children}
      </button>
    </div>
  );
}


export interface ButtonProps {
  variant?: string,
  children: React.ReactNode,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  color?: 'red'| 'pink' | 'purple' | 'indigo' | 'blue' | 'green' | 'yellow' | 'gray' | 'white' | 'black',
}