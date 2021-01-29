import IndexPage from '@pages/index';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('IndexPage', () => {
  test('should switch to presentation mode when the presentation button is clicked', () => {
    // given
    const { getByRole, queryByText } = render(<IndexPage />);

    // when
    userEvent.click(getByRole('button', { name: 'Presentation' }));

    // then
    expect(queryByText('Whiteboard 360')).toBeFalsy();
    expect(getByRole('button', { name: 'Exit Presentation' })).toBeTruthy();
  });

  test('should switch to editor mode when the exit presentation button is clicked', () => {
    // given
    const { getByRole, getByText } = render(<IndexPage />);
    userEvent.click(getByRole('button', { name: 'Presentation' }));

    // when
    userEvent.click(getByRole('button', { name: 'Exit Presentation' }));

    // then
    expect(getByText('Whiteboard 360')).toBeTruthy();
    expect(getByRole('button', { name: 'Presentation' })).toBeTruthy();
  });
});
