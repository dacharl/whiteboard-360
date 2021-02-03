import EditorView from '@components/EditorView';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('EditorView', () => {
  it('should contain the given item categories, app bar and presentation button', () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];

    // when
    const element = render(<EditorView handleModeChange={null} categories={categories} />);

    // then
    categories.forEach((category) => {
      expect(element.getByText(category)).toBeTruthy();
    });
    expect(element.getByText('Whiteboard 360'));
    expect(element.getByRole('button', { name: 'Presentation' }));
  });

  it('should trigger the handleMode callback when the presentation button is clicked', () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const mockAction = jest.fn();
    const { getByRole } = render(<EditorView handleModeChange={mockAction} categories={categories} />);

    // when
    userEvent.click(getByRole('button', { name: 'Presentation' }));

    // then
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
