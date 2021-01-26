import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GetServerSideProps, NextPage } from 'next';

interface Props {
  launch: {
    mission: string;
    site: string;
    timestamp: number;
    rocket: string;
  };
}
const IndexPage: NextPage<Props> = ({ launch }) => {
  const date = new Date(launch.timestamp);
  return (
    <div className={styles.container}>
      <Head>
        <title>Whiteboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next SpaceX Launch: {launch.mission}</h1>
        <p className={styles.description}>
          {launch.rocket} will take off from {launch.site} on {date.toDateString()}
        </p>
      </main>
    </div>
  );
};
export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/launches/next');
  const nextLaunch = await response.json();
  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        site: nextLaunch.launch_site.site_name_long,
        timestamp: nextLaunch.launch_date_unix * 1000,
        rocket: nextLaunch.rocket.rocket_name,
      },
    },
  };
};
