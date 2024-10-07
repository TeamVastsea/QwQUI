import { factory } from "../factory"
import React, { useState } from 'react';
import { render } from '@testing-library/react';

describe('Factory', () => {
  it('Should defined', () => {
    const Comp = factory<{ title: string }>((props) => {
      return (
        <h1>{props.title}</h1>
      )
    }, 'test');
    const { baseElement } = render(<Comp title="hello-world" />);
    expect(baseElement.textContent).toBe('hello-world')
  })
  it('should skip re-rendering if props are unchanged', () => {
    const reRenderingFlag = jest.fn()
    const Comp = factory<{ name: string, age: number }>((props) => {
      reRenderingFlag();
      return (
        <h1>{props.name}</h1>
      )
    }, 'test');
    const { rerender } = render(<Comp name={'Jack'} age={18} />); // render
    rerender(<Comp name={'Jack'} age={19} />)                     // age is 19 not 18 so re-render
    expect(reRenderingFlag).toHaveBeenCalledTimes(2);
    rerender(<Comp name={'Jack'} age={19} />)                     // age is 19 skip re-render
    expect(reRenderingFlag).toHaveBeenCalledTimes(2);
    rerender(<Comp name={'Tom'} age={19} />)                      // name is 'Tom' not 'Jack' so re-render
    expect(reRenderingFlag).toHaveBeenCalledTimes(3);
  })
})