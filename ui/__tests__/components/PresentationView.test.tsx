import PresentationView from '@components/PresentationView';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('PresentationView', () => {
  it('should contain the exit button', () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];

    // when
    const element = render(<PresentationView handleModeChange={null} categories={categories} />);

    // then
    expect(element.getByRole('button', { name: 'Exit Presentation' })).toBeTruthy();
  });

  it('should do trigger the handleMode callback when the exit button is clicked', () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const mockAction = jest.fn();
    const { getByRole } = render(<PresentationView handleModeChange={mockAction} categories={categories} />);

    // when
    userEvent.click(getByRole('button', { name: 'Exit Presentation' }));

    // then
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
