import AppBar from '@components/AppBar';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NextPage } from 'next';
import Typography from '@material-ui/core/Typography';
import { getStandups } from '@api/getStandups';

const StandupIndexPage: NextPage = () => {
  const standups = getStandups();

  return (
    <div>
      <Head>
        <title>Whiteboard 360 - Standups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar standups={standups} />
      <Container maxWidth="md">
        <Typography variant="h5" gutterBottom>
          Standups
        </Typography>
        <List>
          {standups.map((standup) => (
            <Link key={standup.id} href={`/standup/${standup.id}`} passHref>
              <ListItem button component="a">
                <ListItemText>{standup.name}</ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Container>
    </div>
  );
};
export default StandupIndexPage;
