import LaunchDto from '@models/LaunchDto';
import { NextPage } from 'next';
import styles from '@styles/Home.module.css';

interface LaunchProps {
  launch: LaunchDto;
}

const Launch: NextPage<LaunchProps> = ({ launch }) => {
  return launch ? (
    <>
      <h1 className={styles.title}>Next SpaceX Launch: {launch?.mission_name}</h1>
      <p className={styles.description}>
        {launch?.rocket?.rocket_name} will take off from {launch?.launch_site?.site_name_long} on {new Date(launch?.launch_date_unix * 1000).toDateString()}
      </p>
    </>
  ) : (
    <p>Internal Loading...</p>
  );
};

export default Launch;
