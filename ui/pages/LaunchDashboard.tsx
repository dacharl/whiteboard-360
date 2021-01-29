import Launch from '@components/Launch';
import LaunchDto from '@models/LaunchDto';
import { NextPage } from 'next';
import React from 'react';
import useSWR from 'swr';

const LaunchDashboard: NextPage = () => {
  const { data: launch } = useSWR<LaunchDto>('https://api.spacexdata.com/v3/launches/next');

  const isServer = typeof window === 'undefined';

  return isServer ? (
    <Launch launch={launch} />
  ) : (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Launch launch={launch} />
    </React.Suspense>
  );
};

export default LaunchDashboard;
