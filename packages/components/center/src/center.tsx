import React from 'react';
import classes from './center.module.scss';

export const Center: React.FC<CenterProps> = (props: CenterProps) => {
  const { children, inline } = props;
  return (
    <div
      className={classes.root}
      data-inline={inline}
    >
      {children}
    </div>
  );
};

export interface CenterProps {
  children?: React.ReactNode;
  inline?: boolean;
}
