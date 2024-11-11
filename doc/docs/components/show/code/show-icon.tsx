import React from 'react';
import {Code, CodeFile} from '@qwqui/core';

const tsIcon = ()=>{
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.0227966" width="16" height="17" fill="url(#pattern0_16_14)"/>
          <defs>
            <pattern id="pattern0_16_14" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_16_14" transform="scale(0.03125 0.0294118)"/>
            </pattern>
          <image id="image0_16_14" width="32" height="34" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACIAAAAAxH7QBgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAUdJREFUWAntVEFuxCAM3FR9mPuy0pdBX5bOUE9EEiirhhyqYok1tsdjx4v8eEyZEzhMYF1Xw4k4oyWCMBzK7U0CRlet8Nm+amEBHD0hFO4hV/Dq42KT0IuvTcDFQI3/5SLn5fTZwJzAnMDfmkCxzbRTSm1cCo6JHuD2y37GuuJJzU2IuNapoJsmeSuuwgLLPukuwDOAM8fu9jp80f1GKO5sON/dzmHeJa+6DNYGvrQsS+jxjm7gAwUN5x2fmms/00QG8ifPR5mb93wBpPoXOAfHHnEkJgY5ZJ90F+AZwDUbECkwbISyvZNv00fjwKF7AAXYWHDu5Npc91Wtw1qWFyJ8+zrilH/QQRzyy6a+OoHPkgwPboHNh0hJOG+3PEKy/0aemUAiMYCBeqQUnKnJCxAf0d0Smg0wgOoBJ97QBTntx+Iz+C8n8AWTqv3gCvj9AwAAAABJRU5ErkJggg=="/>
        </defs>
    </svg>

  )
}

export default function App(){
  const codes = Array.from({length:10}).fill('console.log("Hello world");').join('\n');
  return (
    <Code showTrafficLight={false}>
      <CodeFile name="index.ts" code="// Comment" language="javascript" icon={tsIcon()} />
      <CodeFile name="file.ts" code={codes} language="javascript" icon={tsIcon()} />
    </Code>
  )
}