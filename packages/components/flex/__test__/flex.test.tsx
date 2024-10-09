import { render } from '@testing-library/react'
import { Flex } from '..';
describe('flex', () => {
  it('should define', () => {
    const wrapper = render(<Flex></Flex>)
    expect(wrapper).toBeDefined();
  });
  it('gap', () => {
    const wrapper = render(
      <Flex gap={8}></Flex>
    )
    const firstChild = wrapper.container.firstElementChild;
    const gap = window.getComputedStyle(firstChild).getPropertyValue('gap');
    expect(gap).toBe('8px');
  })
})