import { useEffect } from "react";
import { ConfigProviderProps } from "./config-provider.type";
import { ConfigContext } from "./config-context";

const overwriteComponentToken = (element:HTMLElement,token: ConfigProviderProps['component']) => {
  if (JSON.stringify(token) === '{}') {
    return;
  }
  if (!element){
    return;
  }
  for (const [, overwriteToken] of Object.entries(token)) {
    // TODO: 后续会重构为 --comp--key: value
    for (const [key, value] of Object.entries(overwriteToken)){
      element.style.setProperty(`--${key}`, value);
      console.log(element.style.getPropertyValue(`--${key}`));
    }
  }
}

const overwriteToken = (element:HTMLElement, token: ConfigProviderProps['tokens']) => {
  if (JSON.stringify(token) === '{}') {
    return;
  }
  if (!element){
    return;
  }
  for (const [color, steps] of Object.entries(token)) {
    for (const [step, value] of Object.entries(steps)) {
      element.style.setProperty(`--${color}-${step}`,value);
    }
  }
}

export const ConfigProvider = (props: Partial<ConfigProviderProps> & {children: React.ReactNode}) => {
  const {
    direction='ltr',
    tokens={},
    component={}
  } = props;
  useEffect(()=>{
    const root = document.querySelector(':root') as HTMLElement;
    overwriteToken(root, tokens)
    overwriteComponentToken(root, component)
    root.style.direction = direction;
  }, [tokens, direction, component]);
  return (
    <ConfigContext.Provider value={props}>
      {props.children}
    </ConfigContext.Provider>
  )
}

ConfigProvider.ConfigContext = ConfigContext;