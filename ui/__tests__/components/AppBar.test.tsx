import React from 'react';
import { render } from '@testing-library/react';
import AppBar from '@components/AppBar';

describe('AppBar', () => {
  test('should contain the app name', () => {
    // given

    // when
    const element = render(<AppBar />);

    // then
    expect(element.getByText('Whiteboard 360')).toBeTruthy();
  });
});
