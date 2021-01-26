import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IndexPage from '../pages/index';

describe('IndexPage', () => {
  test('renders launch data', () => {
    // given
    const mockLaunch = {
      mission: 'Mars',
      site: 'Cape Canaveral',
      timestamp: 1767225600,
      rocket: 'Starship',
    };
    const mockDate = new Date(mockLaunch.timestamp);

    // when
    const { getByText } = render(<IndexPage launch={mockLaunch} />);

    // then
    expect(screen.getByRole('heading')).toHaveTextContent(`Next SpaceX Launch: ${mockLaunch.mission}`);
    expect(getByText(`${mockLaunch.rocket} will take off from ${mockLaunch.site} on ${mockDate.toDateString()}`));
  });
});
