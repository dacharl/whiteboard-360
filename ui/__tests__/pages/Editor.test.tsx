import EditorPage from '@pages/Editor';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('EditorPage', () => {
  test('should contain the given item categories, app bar and presentation button', () => {
    // given
    const expectedCategories = ['New Faces', 'Helps', 'Interestings', 'Events', 'Shoutouts'];

    // when
    const element = render(<EditorPage action={null} />);

    // then
    expectedCategories.forEach((category) => {
      expect(element.getByText(category)).toBeTruthy();
    });
    expect(element.getByText('Whiteboard 360'));
    expect(element.getByRole('button', { name: 'Presentation' }));
  });

  test('should trigger the action when the presentation button is clicked', () => {
    // given
    const mockAction = jest.fn();
    const { getByRole } = render(<EditorPage action={mockAction} />);

    // when
    userEvent.click(getByRole('button', { name: 'Presentation' }));

    // then
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
