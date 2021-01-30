import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import PresentationCarousel from '@components/PresentationCarousel';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('PresentationCarousel', () => {
  it('should begin on the start page', () => {
    // when
    const { getByText } = render(<PresentationCarousel action={null} />);

    // then
    expect(getByText('Standup starts', { exact: false })).toBeTruthy();
  });

  it('should navigate to the next page when the right arrow key is pressed', () => {
    // given
    const element = render(<PresentationCarousel action={null} />);

    // when
    userEvent.type(element.container, '{arrowright}');

    // then
    expect(element.getByText('New Faces', { exact: false })).toBeTruthy();
  });

  it('should navigate to the previous page when the left arrow key is pressed', () => {
    // given
    const element = render(<PresentationCarousel action={null} />);
    userEvent.type(element.container, '{arrowright}');

    // when
    userEvent.type(element.container, '{arrowleft}');

    // then
    expect(element.getByText('Standup starts', { exact: false })).toBeTruthy();
  });

  it('should have an end page', () => {
    // given
    const element = render(<PresentationCarousel action={null} />);
    const outOfBoundsIndex = 10;

    // when
    for (let i = 0; i < outOfBoundsIndex; i++) {
      userEvent.type(element.container, '{arrowright}');
    }

    // then
    expect(element.getByText('STRETCH', { exact: false })).toBeTruthy();
  });

  xit('should exit the presentation when the escape key is pressed', async () => {
    // given
    const mockAction = jest.fn();
    const element = render(<PresentationCarousel action={mockAction} />);

    // when
    userEvent.type(element.container, '{escape}');

    // then
    await waitFor(() => expect(mockAction).toHaveBeenCalledTimes(1));
  });
});
