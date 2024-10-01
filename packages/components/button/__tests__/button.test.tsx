import * as Rect from 'react';
import { act, render } from '@testing-library/react'
import { Button } from '..';

describe('Button', () => {
  it('should define', () => {
    const wrapper = render(
      <Button>Click</Button>
    )
    expect(wrapper).toBeDefined()
  })
})