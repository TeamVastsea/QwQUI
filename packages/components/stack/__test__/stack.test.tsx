import { render } from '@testing-library/react'
import { Stack } from '..';
describe('stack', () => {
  it('should define', () => {
    const wrapper = render(<Stack></Stack>)
    expect(wrapper).toBeDefined();
  });
  it('gap', () => {
    const wrapper = render(
      <Stack gap={8}></Stack>
    )
    const firstChild = wrapper.container.firstElementChild;
    const gap = window.getComputedStyle(firstChild).getPropertyValue('--stack-gap');
    expect(gap).toBe('8px');
  })
})