// COMPONENT_CSS_VAR_LIST START
// - [] AUTO COLLECT ?
// COMPONENT_CSS_VAR_LIST END

type Seq = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Tokens = {
  'zen': Seq;
  'gray-50': Seq;
  'red-50': Seq;
  'danger-50': Seq;
  'pink-50': Seq;
  'grape-50': Seq;
  'violet-50': Seq;
  'indigo-50': Seq;
  'blue-50': Seq;
  'primary-50': Seq;
  'cyan-50': Seq;
  'teal-50': Seq;
  'green-50': Seq;
  'success-50': Seq;
  'lime-50': Seq;
  'yellow-50': Seq;
  'orange-50': Seq;
  'warning-50': Seq;
  'radius-xs': {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    full: string
  } & Record<string, any>
  'breakpoint-xs': {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  } & Record<string, any>;
}
type ComponentVars = {

}

export type ConfigProviderProps = {
  direction: 'ltr' | 'rtl',
  tokens?: Tokens,
  component?: ComponentVars
}