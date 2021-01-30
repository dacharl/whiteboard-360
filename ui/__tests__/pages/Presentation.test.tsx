import PresentationPage from '@pages/Presentation';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('PresentationPage', () => {
  it('should contain the exit button', () => {
    // when
    const element = render(<PresentationPage action={null} />);

    // then
    expect(element.getByRole('button', { name: 'Exit Presentation' })).toBeTruthy();
  });

  it('should do the thing when the exit button is clicked', () => {
    // given
    const mockAction = jest.fn();
    const { getByRole } = render(<PresentationPage action={mockAction} />);

    // when
    userEvent.click(getByRole('button', { name: 'Exit Presentation' }));

    // then
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
