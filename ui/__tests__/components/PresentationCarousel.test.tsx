import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import PresentationCarousel from '@components/PresentationCarousel';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('PresentationCarousel', () => {
  it('should begin on the start page', () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];

    // when
    const { getByText } = render(<PresentationCarousel handleModeChange={null} categories={categories} />);

    // then
    expect(getByText('Standup starts', { exact: false })).toBeTruthy();
  });

  it('should navigate to the next page when the right arrow key is pressed', () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const element = render(<PresentationCarousel handleModeChange={null} categories={categories} />);

    for (let i = 0; i < categories.length; i++) {
      // when
      userEvent.type(element.container, '{arrowright}');

      // then
      expect(element.getByText(categories[i], { exact: false })).toBeTruthy();
    }
  });

  it('should navigate to the previous page when the left arrow key is pressed', () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const element = render(<PresentationCarousel handleModeChange={null} categories={categories} />);
    userEvent.type(element.container, '{arrowright}');

    // when
    userEvent.type(element.container, '{arrowleft}');

    // then
    expect(element.getByText('Standup starts', { exact: false })).toBeTruthy();
  });

  it('should navigate to the end page after the left arrow key is pressed enough times', () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const element = render(<PresentationCarousel handleModeChange={null} categories={categories} />);
    const endPageIndex = categories.length + 1;

    // when
    for (let i = 0; i < endPageIndex; i++) {
      userEvent.type(element.container, '{arrowright}');
    }

    // then
    expect(element.getByText('STRETCH', { exact: false })).toBeTruthy();
  });

  xit('should exit the presentation when the escape key is pressed', async () => {
    // given
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const mockAction = jest.fn();
    const element = render(<PresentationCarousel handleModeChange={mockAction} categories={categories} />);

    // when
    userEvent.type(element.container, '{escape}');

    // then
    await waitFor(() => expect(mockAction).toHaveBeenCalledTimes(1));
  });
});
