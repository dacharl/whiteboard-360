import AppBar from '@components/AppBar';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AppBar', () => {
  it('should contain the app name and standups button', () => {
    // when
    const element = render(<AppBar />);

    // then
    expect(element.getByText('Whiteboard 360')).toBeTruthy();
    expect(element.getByRole('button', { name: 'whiteboard standups' }));
  });

  it('should have a standups menu with different standups in it', () => {
    // given
    const element = render(<AppBar />);
    const standupMenu = element.getByRole('button', { name: 'whiteboard standups' });

    // when
    userEvent.click(standupMenu);

    // then
    expect(element.getByText('Columbus')).toBeTruthy();
    expect(element.getByText('Atlanta')).toBeTruthy();
    expect(element.getByText('Dallas')).toBeTruthy();
  });
});
