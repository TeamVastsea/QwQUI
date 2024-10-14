import { resolveCssVar } from "../resolveCssVar"

it('resolveCssVar', () => {
  const props = {
    width: 300,
    color: 'red',
    className: 'skip',
    style: '',
    children: ''
  } as const;
  const vars = resolveCssVar<'comp', typeof props, any>('comp', props)
  expect(vars['--comp-color']).toBeDefined()
  expect(vars['--comp-width']).toBeDefined()
  expect(vars['--comp-className']).toBeUndefined();
  expect(vars['--comp-style']).toBeUndefined();
  expect(vars['--comp-children']).toBeUndefined();
})