import React from 'react';
import {Code, CodeFile} from '@qwqui/core';

export default function App(){
  const codes = Array.from({length:10}).fill('console.log("Hello world");').join('\n');
  return (
    <Code showRow={false} showCopy={true}>
      <CodeFile name="index.ts" code="// Comment" language="javascript" />
      <CodeFile name="file.ts" code={codes} language="javascript" />
    </Code>
  )
}