import { useEffect, useState } from "react"

const breakpoints = [
  // (l,R]
  [
    [0,576],
    'xs'
  ],
  [
    [576,768],
    'sm'
  ],
  [
    [768, 992],
    'lg'
  ],
  [
    [992, 1200],
    'xl'
  ],
  [
    [1200,1600],
    'xxl'
  ]
] as const

export const useScreenSize = () => {
  const [currentSize, setCurrentSize] = useState('xs');
  const [rangeSize, setRangeSize] = useState<string[]>(['xs']);
  const onResize = () =>{
    const width = window.innerWidth;  
    const points = breakpoints.filter(
      (points)=>{
        const l = points[0][0];
        return width >= l
      }
    )
    setCurrentSize(points[points.length - 1][1])
    setRangeSize(
      points.map((point) => point[1])
    )
  }
  useEffect(() => {
    if (!window){
      return;
    }
    onResize();
    window.addEventListener('resize', onResize)
    return ()=>{
      window.removeEventListener('resize', onResize);
    }
  }, []);
  return {currentSize, rangeSize}
}