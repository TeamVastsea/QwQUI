import React from 'react';
import {Code, CodeFile} from '@qwqui/core';

export default function App(){
  const codes = Array.from({length:1000}).fill('console.log("aaa");').join('\n');
  return (
    <Code>
      <CodeFile name="index.ts" code="// Comment" language="javascript" />
      <CodeFile name="file.ts" code={codes} language="javascript" />
    </Code>
  )
}