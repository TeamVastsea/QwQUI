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
      <Center>Centered Content</Center>
    );
    expect(getByText('Centered Content')).toBeInTheDocument();
  });

  it('should apply inline-flex when inline is true', () => {
    const { container } = render(
      <Center inline>Inline Centered Content</Center>
    );
    expect(container.firstChild).toHaveStyle('display: inline-flex');
  });

  it('should apply flex when inline is false', () => {
    const { container } = render(
      <Center>Block Centered Content</Center>
    );
    expect(container.firstChild).toHaveStyle('display: flex');
  });
});
