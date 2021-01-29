import Head from 'next/head';
// import styles from '@styles/Home.module.css';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';
import Container from '@material-ui/core/Container';
import get from '@api/get';
import ItemCategory from '@components/ItemCategory';
import { ItemModel } from '@components/Item';
import AppBar from '@components/AppBar';
import Grid from '@material-ui/core/Grid';

const items: ItemModel[] = [
  {
    title: 'Title 1',
    author: 'Author 1',
    date: '2020-10-10',
    description: 'Description 1',
  },
  {
    title: 'Title 1',
    author: 'Author 1',
    date: '2020-10-10',
    description: 'Description 1',
  },
  {
    title: 'Title 1',
    author: 'Author 1',
    date: '2020-10-10',
    description: 'Description 1',
  },
];

const IndexPage: NextPage = () => {
  const categories: string[] = ['New Faces', 'Helps', 'Interestings', 'Events', 'Shoutouts'];
  return (
    <div>
      <Head>
        <title>Whiteboard 360</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ refreshInterval: 50, fetcher: get, suspense: true }} />
      <AppBar />
      <Container maxWidth="md">
        <Grid container>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} key={category}>
              <ItemCategory title={category} items={items} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default IndexPage;
