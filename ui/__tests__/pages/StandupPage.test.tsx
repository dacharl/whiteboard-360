import Head from 'next/head';
import React from 'react';
import StandupPage from '@pages/standup/[id]';
import { getCategories } from '@api/getCategories';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Mocks <Head> so we can expose the <title> header */
jest.mock('next/head', () => jest.fn());

/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
Head.mockImplementation(({ children }: { children: Array<React.ReactElement> }) => {
  return (
    <>
      {children.filter((child) => {
        return child.type === (<title />).type;
      })}
    </>
  );
});

jest.mock('@api/getCategories', () => {
  return { getCategories: jest.fn() };
});

/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
getCategories.mockImplementation(() => {
  return ['Category 1', 'Category 2', 'Category 3'];
});

describe('StandupPage', () => {
  it('should reflect the standup name in the page title', () => {
    // given
    const standup = {
      id: 1,
      name: 'Bob',
    };

    // when
    render(<StandupPage standup={standup} />, { container: document.head });

    // then
    expect(document.title).toBe(`Whiteboard 360 - ${standup.name} Standup`);
  });

  it('should show the expected categories in editor mode', () => {
    // given
    const standup = {
      id: 1,
      name: 'Bob',
    };
    const expectedCategories = ['Category 1', 'Category 2', 'Category 3'];

    // when
    const { getByText } = render(<StandupPage standup={standup} />);

    // then
    expectedCategories.forEach((category) => {
      expect(getByText(category)).toBeTruthy();
    });
  });

  it('should switch to presentation mode when the presentation button is clicked', () => {
    // given
    const standup = {
      id: 1,
      name: 'Bob',
    };
    const { getByRole, queryByText } = render(<StandupPage standup={standup} />);

    // when
    userEvent.click(getByRole('button', { name: 'Presentation' }));

    // then
    expect(queryByText('Whiteboard 360')).toBeFalsy();
    expect(getByRole('button', { name: 'Exit Presentation' })).toBeTruthy();
  });

  it('should switch to editor mode when the exit presentation button is clicked', () => {
    // given
    const standup = {
      id: 1,
      name: 'Bob',
    };
    const { getByRole, getByText } = render(<StandupPage standup={standup} />);
    userEvent.click(getByRole('button', { name: 'Presentation' }));

    // when
    userEvent.click(getByRole('button', { name: 'Exit Presentation' }));

    // then
    expect(getByText('Whiteboard 360')).toBeTruthy();
    expect(getByRole('button', { name: 'Presentation' })).toBeTruthy();
  });
});
