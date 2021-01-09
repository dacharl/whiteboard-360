import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const Item = ({ content }) => {
  const { title, author } = content;
  const displayTitle = title + (author ? ' (' + author + ')' : '');
  return (
    <Grid item>
      <Typography>{displayTitle}</Typography>
    </Grid>
  );
};

export default Item;
