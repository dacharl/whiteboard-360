import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NextPage } from 'next';
import useSWR, { SWRConfig } from 'swr';
import React from 'react';
import LaunchDto from '../models/LaunchDto';
import Launch from '@components/launch';

// interface Launch {
//   mission: string;
//   site: string;
//   timestamp: number;
//   rocket: string;
// }

const IndexPage: NextPage = () => {
  async function fetcher<T>(req: RequestInfo): Promise<T> {
    const res = await fetch(req);
    return await res.json();
  }

  const { data: launch } = useSWR<LaunchDto>('https://api.spacexdata.com/v3/launches/next', fetcher);

  // const launch: Launch = {
  //   mission: data.mission_name,
  //   site: data.launch_site.site_name_long,
  //   timestamp: data.launch_date_unix * 1000,
  //   rocket: data.rocket.rocket_name,
  // };

  // const date = new Date(launch.timestamp);
  const isServer = typeof window === 'undefined';
  return (
    <div className={styles.container}>
      <SWRConfig value={{ fetcher: fetcher, suspense: true }} />
      <Head>
        <title>Whiteboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>Is Server? {isServer ? 'yes' : 'no'}</p>
        {isServer ? (
          <>
            <Launch launch={launch} />
          </>
        ) : (
          <>
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <Launch launch={launch} />
            </React.Suspense>
          </>
        )}
      </main>
    </div>
  );
};
export default IndexPage;
