import { useState } from "react";
import { Button } from "@qwqui/core";

export const ButtonControls = () => {
  const [color, setColor] = useState('blue');
  const [size, setSize] = useState('md');
  const [radius, setRadius] = useState('md');
  const [useCustomRadius, setUseCustomRadius] = useState(false);
  const [strong, setStrong] = useState(false);

  const code = `
import { Button } from "@qwqui/core";
    
ReactDOM.createRoot(_mount_).render(
  <div>
    <Button color="${color}" size="${size}" ${useCustomRadius && `radius="${radius}"`} strong={${strong}}>Button</Button>
  </div>,
);
`

  const codeStr = `
import { Button } from "@qwqui/core";

function Demo() {
  return <Button color="${color}" size="${size}"${useCustomRadius ? ` radius="${radius}"` : ''}${strong ? ` strong={${strong}}` : ''}>Button</Button>;
}`.trimStart()
  
  const COLORS = ['gray', 'red', 'pink', 'grape', 'violet', 'indigo',
    'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'];
  const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <>
      <div style={{display: "flex", gap: 30}}>
        <label>
          Color:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            {COLORS.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </label>

        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            {SIZES.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </label>

        <label>
          Use custom radius:&nbsp;
          <input type="checkbox" checked={useCustomRadius} onChange={(e) => setUseCustomRadius(e.target.checked)}/>
        </label>

        {useCustomRadius && (
          <label>
            Radius:
            <select value={radius} onChange={(e) => setRadius(e.target.value)}>
              {SIZES.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
              <option value="full">full</option>
            </select>
          </label>
        )}

        <label>
          Strong:&nbsp;
          <input type="checkbox" checked={strong} onChange={(e) => setStrong(e.target.checked)}/>
        </label>
      </div>

      <Button color={color} size={size} radius={useCustomRadius ? radius : undefined} strong={strong}>Button</Button>
      <pre style={{backgroundColor: "var(--gray-50)", padding: 20, fontSize: 14}} className={'code'}>
        {codeStr}
      </pre>
    </>
  )
};