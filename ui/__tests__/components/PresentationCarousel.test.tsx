import '@testing-library/jest-dom/extend-expect';
import { ESCAPE, RIGHT_ARROW } from '@constants/Keys';
import { fireEvent, render } from '@testing-library/react';
import PresentationCarousel from '@components/PresentationCarousel';
import React from 'react';

describe('PresentationCarousel', () => {
  test('should begin on the start page', () => {
    // given

    // when
    const { getByText } = render(<PresentationCarousel action={null} />);

    // then
    expect(getByText('Standup starts', { exact: false })).toBeTruthy();
  });

  xtest('should navigate to the next page when the right arrow key is pressed', () => {
    // given
    const mockAction = jest.fn();
    const element = render(<PresentationCarousel action={mockAction} />);
    const arrowRightKeyDown = new KeyboardEvent('keydown', { key: RIGHT_ARROW });
    console.log(JSON.stringify(arrowRightKeyDown));

    // when
    element.getByText('Standup starts', { exact: false }).focus();
    fireEvent.keyDown(document.activeElement || document.body, arrowRightKeyDown);

    // then
    expect(element.findByText('Standup starts', { exact: false })).toBeFalsy();
  });

  xtest('should exit the presentation when the escape key is pressed', () => {
    // given
    const mockAction = jest.fn();
    const element = render(<PresentationCarousel action={mockAction} />);
    const escapeKeyDown = new KeyboardEvent('keydown', { key: ESCAPE });
    console.log(JSON.stringify(escapeKeyDown));

    // when
    element.getByText('Standup starts', { exact: false }).focus();
    fireEvent.keyDown(document.activeElement || document.body, escapeKeyDown);

    // then
    element.getByText('Standup starts', { exact: false }).focus();
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
