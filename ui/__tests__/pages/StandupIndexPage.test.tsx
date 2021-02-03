import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import StandupIndexPage from '@pages/index';
import { getStandups } from '@api/getStandups';
import { render } from '@testing-library/react';

jest.mock('@api/getStandups', () => {
  return { getStandups: jest.fn() };
});

/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
getStandups.mockImplementation(() => {
  return [
    {
      id: 1,
      name: 'Standup A',
    },
    {
      id: 2,
      name: 'Standup B',
    },
    {
      id: 3,
      name: 'Standup C',
    },
  ];
});

describe('StandupIndexPage', () => {
  it('should show a list of available standups with the correct hrefs', () => {
    // given
    const expectedStandups = [
      {
        id: 1,
        name: 'Standup A',
      },
      {
        id: 2,
        name: 'Standup B',
      },
      {
        id: 3,
        name: 'Standup C',
      },
    ];

    // when
    const { getAllByText, getByRole } = render(<StandupIndexPage />);

    // then
    expect(getAllByText('Standups').length).toBe(2);
    expectedStandups.forEach(({ id, name }) => {
      expect(getByRole('link', { name })).toHaveAttribute('href', `/standup/${id}`);
    });
  });
});
