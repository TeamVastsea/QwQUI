import { Stack, StackAlign, StackJustify } from '@qwqui/core';
import './btn-style.scss';
import { Dispatch, SetStateAction, useState } from 'react';

function select<T extends string>(
  state: T,
  setState: Dispatch<SetStateAction<T>>,
  id: string,
  values: T[]
) {
  return (
    <div className={id}>
      <p>{id}: {state}</p>
      {
        values.map((val, idx) => {
          return (
            <div key={idx}>
              <input
                name={`${id}`}
                key={idx}
                type='radio'
                id={`${id}-${val}`}
                value={val}
                onClick={() => setState(val)}
                defaultChecked={val === state}
              />
              <label htmlFor={`${id}-${val}`}>{val}</label>
            </div>
          )
        })
      }
    </div>
  )
}

export default function App() {
  const [gap, setGap] = useState(8);
  const [align, setAlign] = useState<StackAlign>('stretch');
  const [justify, setJustify] = useState<StackJustify>('center');
  const aligns: StackAlign[] = ['stretch', 'center', 'start', 'end'];
  const justifies: StackJustify[] = ["center", "start", "end", "space-around", "space-between", "evenly"];
  return (
    <div>
      <Stack gap={gap} align={align} justify={justify} h={300} style={{
        border: '3px solid #66ccff',
        padding: '4px',
        borderRadius: '8px'
      }}>
        <button className='btn'>
          Item - 1
        </button>
        <button className='btn'>
          Item - 2
        </button>
        <button className='btn'>
          Item - 3
        </button>
      </Stack>
      <div className="gap">
        <p>Gap: {gap}px</p>
        <input type={'range'} min={0} max={64} value={gap} onChange={(ev) => setGap(Number(ev.target.value))} />
      </div>
      <div className='actions'>
        {
          select(align, setAlign, 'aligns', aligns)
        }
        {
          select(justify, setJustify, 'justify', justifies)
        }
      </div>
    </div>
  )
}