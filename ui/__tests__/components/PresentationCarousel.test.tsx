import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import PresentationCarousel from '@components/PresentationCarousel';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('PresentationCarousel', () => {
  // given
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const items = new Map([
    [
      'Category 1',
      [
        {
          itemId: '1',
          standupId: '1',
          category: 'Category 1',
          title: 'Title 1',
          author: 'Author 1',
          date: '2020-01-10',
          description: 'Description 1',
        },
      ],
    ],
    [
      'Category 2',
      [
        {
          itemId: '2',
          standupId: '1',
          category: 'Category 2',
          title: 'Title 2',
          author: 'Author 2',
          date: '2020-01-11',
          description: 'Description 2',
        },
      ],
    ],
    [
      'Category 3',
      [
        {
          itemId: '3',
          standupId: '1',
          category: 'Category 3',
          title: 'Title 3',
          author: 'Author 3',
          date: '2020-01-12',
          description: 'Description 3',
        },
      ],
    ],
  ]);

  it('should begin on the start page', () => {
    // when
    const { getByText } = render(<PresentationCarousel handleModeChange={null} categories={categories} items={items} />);

    // then
    expect(getByText('Standup starts', { exact: false })).toBeTruthy();
  });

  it('should navigate to the next page when the right arrow key is pressed', () => {
    // given
    const { container, getByText } = render(<PresentationCarousel handleModeChange={null} categories={categories} items={items} />);

    for (let i = 0; i < categories.length; i++) {
      // when
      userEvent.type(container, '{arrowright}');

      // then
      expect(getByText(categories[i], { exact: false })).toBeTruthy();
      expect(getByText(items.get(categories[i])[0].title, { exact: false }));
    }
  });

  it('should navigate to the previous page when the left arrow key is pressed', () => {
    // given
    const { container, getByText } = render(<PresentationCarousel handleModeChange={null} categories={categories} items={items} />);
    userEvent.type(container, '{arrowright}');

    // when
    userEvent.type(container, '{arrowleft}');

    // then
    expect(getByText('Standup starts', { exact: false })).toBeTruthy();
  });

  it('should navigate to the end page after the left arrow key is pressed enough times', () => {
    // given
    const { container, getByText } = render(<PresentationCarousel handleModeChange={null} categories={categories} items={items} />);
    const endPageIndex = categories.length + 1;

    // when
    for (let i = 0; i < endPageIndex; i++) {
      userEvent.type(container, '{arrowright}');
    }

    // then
    expect(getByText('STRETCH', { exact: false })).toBeTruthy();
  });

  xit('should exit the presentation when the escape key is pressed', async () => {
    // given
    const mockAction = jest.fn();
    const { container } = render(<PresentationCarousel handleModeChange={mockAction} categories={categories} items={items} />);

    // when
    userEvent.type(container, '{escape}');

    // then
    await waitFor(() => expect(mockAction).toHaveBeenCalledTimes(1));
  });
});
