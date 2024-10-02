import * as React from 'react';
import { render } from '@testing-library/react';
import { Center } from '..';

describe('Center', () => {
  it('should be defined', () => {
    const { container } = render(
      <Center>Centered Content</Center>
    );
    expect(container).toBeDefined();
  });

  it('should render children correctly', () => {
    const { getByText } = render(
      <Center>Centered Content</Center>,
    );
    expect(getByText('Centered Content')).toBeDefined();
  });

  it('should apply inline-flex when inline is true', () => {
    const { baseElement } = render(
      <Center inline><div>Inline Centered Content</div></Center>,
    );
    const comp = baseElement.firstElementChild;
    expect(comp).toBeDefined();
    expect(comp.getAttribute('data-inline')).toBeDefined()
    expect(comp.getAttribute('data-inline')).not.toBe('')
  });

  it('should apply flex when inline is false', () => {
    const { baseElement } = render(
      <Center>Block Centered Content</Center>
    );
    const comp = baseElement.firstElementChild;
    expect(comp).toBeDefined();
    expect(comp.getAttribute('data-inline')).toBeNull()
  });
});
