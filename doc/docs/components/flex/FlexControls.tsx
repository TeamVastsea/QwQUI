import { useState } from "react";
import { Button } from "@qwqui/core";
import { Flex } from "@qwqui/core";

const FlexControls = () => {
  const [gap, setGap] = useState('xs');
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('flex-start');
  const [direction, setDirection] = useState('row');
  const [wrap, setWrap] = useState('nowrap');

  const codeStr = `
import React from 'react';
import { Flex } from '@qwqui/core';
import { Button } from '@qwqui/core';

const App = () => {
    return (
        <Flex
            direction=${direction}
            justify=${justify}
            align=${align}
            wrap=${wrap}
            gap=${gap}
            minHeight={50}
            background="gray"
        >
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
        </Flex>
    );
}

export default App;`.trimStart();
  
  const GAPS = ['xs', 'sm', 'md', 'lg', 'xl'];
  const JUSTIFYS = ['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
  const ALIGNS = ['center', 'flex-start', 'flex-end'];
  const DIRECTIONS = ['row', 'column', 'row-reverse', 'column-reverse'];
  const WRAPS = ['wrap', 'nowrap', 'wrap-reverse'];

  return (
    <>
        <label>
            Gap:
            <select value={gap} onChange={(e) => setGap(e.target.value)}>
                {GAPS.map(item=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </label>
        <label>
            Justify:
            <select value={justify} onChange={(e) => setJustify(e.target.value)}>
                {JUSTIFYS.map(item=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </label>
        <label>
            Align:
            <select value={align} onChange={(e) => setAlign(e.target.value)}>
                {ALIGNS.map(item=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </label>
        <label>
            Direction:
            <select value={direction} onChange={(e) => setDirection(e.target.value)}>
                {DIRECTIONS.map(item=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </label>
        <label>
            Wraps:
            <select value={wrap} onChange={(e) => setWrap(e.target.value)}>
                {WRAPS.map(item=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </label>
        <Flex
            direction={direction}
            justify={justify}
            align={align}
            wrap={wrap}
            gap={gap}
            mih={50}
            bg="gray"
        >
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
        </Flex>
        <pre style={{backgroundColor: "var(--gray-50)", padding: 20, fontSize: 14, borderRadius: 5}} className={'code'}>
            {codeStr}
        </pre>
    </>
  );``
};

export default FlexControls;
