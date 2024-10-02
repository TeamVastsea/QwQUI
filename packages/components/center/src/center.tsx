import React from 'react';
import classes from './center.module.scss';

export const Center = (props: CenterProps) => {
  const { children, inline } = props;

  const getDisplayType = () => {
    return inline ? 'inline-flex' : 'flex';
  };

  return (
    <div
      className={classes.root}
  data-inline={inline}
      {...others}>
      {children}
    </div>
  );
};

export interface CenterProps {
  children?: React.ReactNode;
  inline?: boolean;
}
