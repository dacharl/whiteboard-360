import Grid from '@material-ui/core/Grid';
import React from 'react';
import Item from '../Item';

const Posts = ({ items }) => {
  return (
    <Grid container>
      {items.map((item) => (
        <Item key={item.title + item.author} content={item} />
      ))}
    </Grid>
  );
};

export default Posts;
