import { RippleProps } from "./ripple";

export const useRipple = (props: Omit<RippleProps, 'children'>) => {
  let oldPosition = '';
  const magnitude = (x1: number, y1: number, x2: number, y2: number): number => {
    const deltaX = x1 - x2;
    const deltaY = y1 - y2;

    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }
  const createElement = (
    size: number, x: number, y: number, color: string,
    opacity: number
  ) => {
    const el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.top = `${y}px`;
    el.style.left = `${x}px`;
    el.style.background = `${color}`;
    el.style.opacity = `${opacity}`;
    el.style.transform = `translate(-50%,-50%) scale(0)`;
    el.style.transition = `transform ease-in 300ms`
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
    ripperSurface: HTMLDivElement,
    event: PointerEvent,
    color: string = '#fff',
    opacity: number = 0.5,
    duration: number = 500
  ) => {
    const bindElement = ripperSurface.parentElement;
    const rippleWrapper = ripperSurface;

    const { clientX, clientY } = event;
    const rect = bindElement.getBoundingClientRect()
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const size = getDistance(x, y, rect) * 4;
    const ripple = createElement(size, x, y, color, opacity);
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
      setTimeout(() => {
        ripple.remove();
        if (!rippleWrapper.children.length) {
          bindElement.style.position = bindElement['_old_position'] ?? oldPosition
        }
      }, duration);
    })
  }
  return { add }
}