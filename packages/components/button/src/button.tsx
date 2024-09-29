import React from 'react';
import './button.scss';

export const Button = (props: ButtonProps) => {
  const size = props.size || 'md';

  return (
    <div>
      <button
        style={{
          height: `var(--button-height-${size})`,
          padding: `0 var(--button-padding-${size})`,
        }}>
        {props.children}
      </button>
    </div>
  );
}


export interface ButtonProps {
  color?: string,
  variant?: string,
  children: React.ReactNode,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}