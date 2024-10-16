import React from 'react';
import {Code, CodeFile} from '@qwqui/core';

export default function App(){
  return (
    <Code>
      <CodeFile name="index.ts" code="// index.ts" />
      <CodeFile name="file.ts" code="// file.ts" />
    </Code>
  )
}