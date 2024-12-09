import React from 'react';

export const factory = <
P,
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
SubComponent extends Record<string, React.FC<unknown>> | null=Record<string,React.FC>,
>(
  callback: React.FC<P>,
  displayName: string,
  subcomponent: SubComponent|null=null
) => {
  const component = React.memo(callback);
  component.displayName = displayName;
  if (subcomponent === null){
    return component as unknown as React.FC<P> & SubComponent;
  }
  for (const key of Object.keys(subcomponent)) {
    component[key] = subcomponent[key];
  }
  return component as unknown as React.FC<P> & SubComponent;
}