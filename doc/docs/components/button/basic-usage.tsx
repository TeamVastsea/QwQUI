import { Button } from '@qwqui/core';

export default function App() {
  return (
    <div style={{display: "flex", gap: 10}}>
      <Button size={"xs"}>Button</Button>
      <Button size={"sm"}>Button</Button>
      <Button>Button</Button>
      <Button size={"lg"}>Button</Button>
      <Button size={"xl"}>Button</Button>
    </div>
  )
}