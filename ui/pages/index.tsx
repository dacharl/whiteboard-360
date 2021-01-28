import Head from 'next/head';
import styles from '@styles/Home.module.css';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';
import LaunchDashboard from '@pages/LaunchDashboard';
import get from '@api/get'; // TODO fix ts path for jest

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SWRConfig value={{ refreshInterval: 50, fetcher: get, suspense: true }} />
      <Head>
        <title>Whiteboard 360</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LaunchDashboard />
      </main>
    </div>
  );
};
export default IndexPage;
