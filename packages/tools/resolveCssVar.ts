export const resolveCssVar = <P extends string, PR extends { [k: string]: any }, R>(compName: P, props: PR) => {
  const keys = Object.keys(props) as unknown as Extract<keyof PR, string>[];
  let ret: {
    [k: string]: any
  } = {}
  for (const key of keys) {
    const value = props[key];
    if (key === 'children' || key === 'className' || key === 'style') {
      continue;
    }
    ret[`--${compName}-${key}`] = value;
  }
  return ret as R;
}