import {useScreenSize} from '@qwqui/core';
export default function App(){
  const {currentSize} = useScreenSize();
  return (
    <div>
      当前大小: {currentSize}
    </div>
  )
}