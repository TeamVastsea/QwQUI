import React from 'react';

export const factory = <P>(
  callback: (props: P) => React.ReactNode,
  displayName: string
) => {
  const component = React.memo(callback);
  component.displayName = displayName;
  return component;
}