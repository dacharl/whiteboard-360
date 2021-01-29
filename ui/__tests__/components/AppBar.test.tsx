import AppBar from '@components/AppBar';
import React from 'react';
import { render } from '@testing-library/react';

describe('AppBar', () => {
  test('should contain the app name', () => {
    // given

    // when
    const element = render(<AppBar />);

    // then
    expect(element.getByText('Whiteboard 360')).toBeTruthy();
  });
});
