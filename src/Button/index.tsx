import React, {useState} from 'react';

export type ButtonProp = {
  /**
   * @description 组件大小
   * @default "md"
   */
  size?: "sm" | "md" | "lg",
  children: React.ReactNode,
  onClick?: () => void,
}

export default function Button(props: ButtonProp) {
  let [hover, setHover] = useState(false);
  let [pressed, setPressed] = useState(false);

  function getSize() {
    switch (props.size) {
      case "sm": {
        return 30;
      }
      case "md": {
        return 50;
      }
      case "lg": {
        return 70;
      }
      default: {
        return 50;
      }
    }
  }
  function calcPadding() {
    switch (props.size) {
      case "sm": {
        return 1;
      }
      case "md": {
        return 2;
      }
      case "lg": {
        return 3;
      }
      default: {
        return 2;
      }
    }
  }

  function calcShadow(multiple: number) {
    let size = calcPadding() * multiple + '';
    return "0px " + size + "px 0px 0px #791237";
  }

  return(
    <p>
      <button onClick={props.onClick} type={"button"} onMouseDown={() => {setPressed(true);}}
              onMouseUp={() => {setPressed(false);}} onMouseEnter={() => {setHover(true);}}
              onMouseLeave={() => {setHover(false);}} style={{
        position: "relative",
        backgroundColor: "#e6224d",
        borderRadius: 5,
        boxShadow: pressed ? calcShadow(1) : hover ? calcShadow(3) : calcShadow(2),
        padding: getSize() * 0.3,
        boxSizing: "border-box",
        width: 149,
        height: getSize() - 1,
        color: "#fff",
        border: "none",
        fontSize: getSize() * 0.4,
        bottom: pressed ? calcPadding() * -1 : hover? calcPadding() : 0,
        transition: "all .05s ease-in-out",
      }}>{props.children}</button>
    </p>
  )
}
