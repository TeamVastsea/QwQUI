import { render } from '@testing-library/react'
import { Group } from '..';
describe('group', () => {
  it('should define', () => {
    expect(
      render(<Group></Group>)
    ).toBeDefined()
  });
  it('gap', () => {
    const wrapper = render(
      <Group gap={8}></Group>
    )
    const firstChild = wrapper.container.firstElementChild;
    const gap = window.getComputedStyle(firstChild).getPropertyValue('--group-gap');
    expect(gap).toBe('8px');
  })
})