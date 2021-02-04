import EditorView from '@components/EditorView';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('EditorView', () => {
  // given
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const items = [
    {
      itemId: '1',
      standupId: '1',
      category: 'Category 1',
      title: 'Title 1',
      author: 'Author 1',
      date: '2020-01-10',
      description: 'Description 1',
    },
    {
      itemId: '2',
      standupId: '1',
      category: 'Category 2',
      title: 'Title 2',
      author: 'Author 2',
      date: '2020-01-11',
      description: 'Description 2',
    },
    {
      itemId: '3',
      standupId: '1',
      category: 'Category 3',
      title: 'Title 3',
      author: 'Author 3',
      date: '2020-01-12',
      description: 'Description 3',
    },
  ];

  it('should contain the given items, item categories, app bar and presentation button', () => {
    // when
    const { getByRole, getByText } = render(<EditorView handleModeChange={null} categories={categories} items={items} />);

    // then
    categories.forEach((category) => {
      expect(getByText(category)).toBeTruthy();
    });
    items.forEach((item) => {
      expect(getByText(item.title, { exact: false })).toBeTruthy();
    });
    expect(getByText('Whiteboard 360'));
    expect(getByRole('button', { name: 'Presentation' }));
  });

  it('should trigger the handleMode callback when the presentation button is clicked', () => {
    // given
    const mockAction = jest.fn();
    const { getByRole } = render(<EditorView handleModeChange={mockAction} categories={categories} items={items} />);

    // when
    userEvent.click(getByRole('button', { name: 'Presentation' }));

    // then
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
