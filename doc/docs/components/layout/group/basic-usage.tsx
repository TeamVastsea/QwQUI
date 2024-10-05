import { Group, GroupJustify } from '@qwqui/core';
import './style.scss'
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
      <div className={`${id}__wrapper`}>
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
    </div>
  )
}

export default function App() {
  const [grow, setGrow] = useState(false);
  const [justify, setJustify] = useState<GroupJustify>('start');
  const [gap, setGap] = useState(0);
  return (
    <div>
      <Group gap={gap} grow={grow} justify={justify}>
        <div className='demo-block'>Item - 1</div>
        <div className='demo-block'>Item - 2</div>
        <div className='demo-block'>Item - 3</div>
      </Group>

      <div style={{
        marginTop: '64px'
      }}>
        <label htmlFor="">Gap: {gap}px</label>
        <input type='range' defaultValue={gap} min={0} max={32} onChange={(ev) => setGap(parseInt(ev.target.value))} />
      </div>
      <div>
        <label htmlFor="grow">Grow: </label>
        <input id='grow' type='checkbox' defaultChecked={grow} onChange={(ev) => setGrow(ev.target.checked)} />
      </div>
      {
        select(justify, setJustify, 'Justify', ['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'] as GroupJustify[])
      }
    </div>
  )
}