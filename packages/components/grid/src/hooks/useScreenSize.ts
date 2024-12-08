import { useEffect, useState } from "react"
import { Range } from "../types/common.props";

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

export type UseScreenSizeOptions= {
  externalSize?: {
    [x:string]:Range
  }
}

export const useScreenSize = (options:UseScreenSizeOptions={}) => {
  const {
    externalSize={}
  } = options;
  const [fullBreakPoints] = useState([
    ...breakpoints,
    ...Object.keys(externalSize)
    .map(key => {
      return [
        [
          externalSize[key][0],
          externalSize[key][1]
        ],
        key
      ] as const
    })
  ])
  const [currentSize, setCurrentSize] = useState('xs');
  const [rangeSize, setRangeSize] = useState<string[]>(['xs']);
  const onResize = () =>{
    const width = document.documentElement.clientWidth;
    const descSortedBreakpoints = [...fullBreakPoints].sort((a,b) => {
      const [,ar] = a[0];
      const [,br] = b[0];
      return br-ar;
    })
    if (width <= descSortedBreakpoints[descSortedBreakpoints.length-1][0][0]) {
      setCurrentSize(descSortedBreakpoints[descSortedBreakpoints.length-1][1]);
      return;
    }
    if (width > descSortedBreakpoints[0][0][1]) {
      setCurrentSize(descSortedBreakpoints[0][1]);
      return;
    }
    const points = descSortedBreakpoints.filter(
      (points)=>{
        const l = points[0][0];
        const r = points[0][1]
        return width > l && width <= r
      }
    )
    points.sort((a,b) => {
      const [,ar] = a[0];
      const [,br] = b[0];
      return ar-br
    })
    setCurrentSize(points[0][1])
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