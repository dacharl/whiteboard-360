import React from 'react';
import { render } from '@testing-library/react';
import IndexPage from '@pages/index';

describe('IndexPage', () => {
  test('renders', () => {
    // when
    const element = render(<IndexPage />);

    // then
    expect(element).toBeTruthy();
  });
});
