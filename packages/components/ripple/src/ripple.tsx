import React, { useEffect, useRef } from 'react';
import { useRipple } from './use-ripple';

export const Ripple = (props: RippleProps) => {
  const {
    blur = 0,
    duration = 500,
    color = '#ffffff50',
    animationName = 'ease-out',
    endOpacity = 0
  } = props;
  const surface = useRef(null);
  const { add } = useRipple({ blur, duration, color, animationName, endOpacity });
  const bindElement = useRef<HTMLElement>(null);
  const handleClick = (event: React.PointerEvent<HTMLElement>) => {
    if (!bindElement.current) {
      bindElement.current = (surface.current as HTMLDivElement).parentElement;
      bindElement.current.addEventListener('pointerdown', (ev) => {
        add(
          surface.current,
          bindElement.current,
          ev
        )
      })
      add(surface.current, bindElement.current, event as unknown as PointerEvent)
    }
  }
  return <div ref={surface} onPointerDown={(event: React.PointerEvent<HTMLElement>) => handleClick(event)} style={
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
  color?: string;
  endOpacity?: number;
  blur?: number;
  duration?: number;
  animationName?: string;
}

Ripple.displayName = 'Ripple'