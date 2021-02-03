import '@testing-library/jest-dom/extend-expect';
import AppBar from '@components/AppBar';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AppBar', () => {
  it('should contain the app name and no standups button if no standups are provided', () => {
    // when
    const element = render(<AppBar standups={undefined} />);

    // then
    expect(element.getByText('Whiteboard 360')).toBeTruthy();
    expect(element.queryByRole('button', { name: 'whiteboard standups' })).toBeNull();
  });

  it('should have a standups menu with different standups in it', () => {
    // given
    const standups = [
      {
        id: 1,
        name: 'Columbus',
      },
      {
        id: 2,
        name: 'Dallas',
      },
      {
        id: 3,
        name: 'Atlanta',
      },
    ];
    const { getByRole } = render(<AppBar standups={standups} />);
    const standupMenu = getByRole('button', { name: 'whiteboard standups' });

    // when
    userEvent.click(standupMenu);

    // then
    expect(getByRole('menuitem', { name: 'Columbus' })).toHaveAttribute('href', '/standup/1');
    expect(getByRole('menuitem', { name: 'Dallas' })).toHaveAttribute('href', '/standup/2');
    expect(getByRole('menuitem', { name: 'Atlanta' })).toHaveAttribute('href', '/standup/3');
  });
});
