import React, { useRef } from 'react';
import { useRipple } from './use-ripple';

export const Ripple = (props: RippleProps) => {
  const {
    children,
    opacity = 0.5,
    blur = 0,
    duration = 500,
    fillAndhold = false,
    color = '#fff'
  } = props;
  const surface = useRef(null);
  const { add } = useRipple({
    blur,
    opacity,
    duration,
    fillAndhold,
    color,
  });
  const handleClick = (event: PointerEvent) => {
    add(
      surface.current!,
      event,
      color,
      opacity,
      duration,
    )
  }
  return <div ref={surface} onPointerDown={(event: React.PointerEvent<unknown>) => handleClick(event as unknown as PointerEvent)} style={
    {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }
  } />
}

export interface RippleProps {
  children: React.ReactNode;
  color?: string;
  opacity?: number;
  blur?: number;
  duration?: number;
  fillAndhold?: boolean;
}

Ripple.displayName = 'Ripple'