import { useEffect } from "react";
import { RippleProps } from "./ripple";

export const useRipple = (
  props: RippleProps & { surface?: React.MutableRefObject<HTMLDivElement> } = {
    color: '#ffffff50',
    animationName: 'ease-out',
    duration: 300,
    blur: 0,
    endOpacity: 0.5
  }
) => {
  let oldPosition = '';
  const { color, animationName, duration, blur, endOpacity, surface } = props;
  useEffect(() => {
    const bindElement = surface.current.parentElement;
    if (surface.current) {
      const computedStyle = window.getComputedStyle(bindElement);
      if (computedStyle.position === 'static') {
        if (bindElement.style.position) {
          oldPosition = bindElement.style.position
        }
        bindElement.style.position = 'relative'
      }
      surface.current.style.borderRadius = computedStyle.borderRadius
    }
  }, [surface])
  const magnitude = (x1: number, y1: number, x2: number, y2: number): number => {
    const deltaX = x1 - x2;
    const deltaY = y1 - y2;

    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }
  const createElement = (
    size: number, x: number, y: number
  ) => {
    const el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.top = `${y}px`;
    el.style.left = `${x}px`;
    el.style.background = `${color}`;
    el.style.opacity = `0`;
    el.style.transform = `translate(-50%,-50%) scale(0)`;
    el.style.transition = `transform ${animationName} ${duration}ms, opacity ${animationName} ${duration}ms`
    el.style.borderRadius = '100%'
    return el;
  }
  const getDistance = (
    x: number,
    y: number,
    { width, height }: DOMRect
  ): number => {
    // 获取点击目标的位置到块级作用域边界的距离
    const topLeft = magnitude(x, y, 0, 0);
    const topRight = magnitude(x, y, width, 0);
    const bottomLeft = magnitude(x, y, 0, height);
    const bottomRight = magnitude(x, y, width, height);
    return Math.max(topLeft, topRight, bottomLeft, bottomRight);
  }
  const add = (
    ripperSurface: HTMLElement,
    bindElement: HTMLElement,
    event: PointerEvent
  ) => {
    const rippleWrapper = ripperSurface;
    if (!bindElement.contains(rippleWrapper)) {
      bindElement.appendChild(rippleWrapper);
    }
    const { clientX, clientY } = event;
    const rect = bindElement.getBoundingClientRect()
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const size = getDistance(x, y, rect) * 2;
    const ripple = createElement(size, x, y);
    const computedStyle = window.getComputedStyle(bindElement);
    if (computedStyle.position === 'static') {
      if (bindElement.style.position) {
        oldPosition = bindElement.style.position
      }
      bindElement.style.position = 'relative'
    }

    rippleWrapper.appendChild(ripple)
    requestAnimationFrame(() => {
      ripple.style.transform = `translate(-50%,-50%) scale(1)`;
      ripple.style.opacity = `0.5`;
      ripple.style.filter = `blur(${blur})`
      setTimeout(() => {
        ripple.style.opacity = `${endOpacity}`;
        ripple.style.filter = `blur(0px)`
        ripple.addEventListener('transitionend', () => {
          setTimeout(() => {
            ripple.remove();
            if (!rippleWrapper.children.length) {
              bindElement.style.position = bindElement['_old_position'] ?? oldPosition
              rippleWrapper.remove();
            }
          }, duration);
        })
      }, duration);
    })
  }
  return { add }
}