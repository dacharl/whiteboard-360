import { ESCAPE, LEFT_ARROW, RIGHT_ARROW } from '@constants/Keys';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { NextPage } from 'next';
import PresentationItemCategory from './PresentationItemCategory';
import { Typography } from '@material-ui/core';
import stubItems from '@models/ItemModel.stub';
import useEvent from '@react-hook/event';
import { useState } from 'react';

const PresentationStart: NextPage<PresentationCarouselProps> = ({ action }) => {
  return (
    <Grid container direction="column" justify="space-between" alignItems="stretch">
      <Grid item xs={12}>
        <Typography align="center" variant="h2">
          Standup starts in some time...
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          <Grid item>
            <Button color="primary" variant="contained" onClick={action}>
              Exit Presentation
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const PresentationEnd: NextPage<PresentationCarouselProps> = ({ action }) => {
  return (
    <Grid container direction="column" justify="space-between">
      <Grid item xs={12}>
        <Typography align="center" variant="h2">
          STRETCH!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          <Grid item>
            <Button color="primary" variant="contained" onClick={action}>
              Exit Presentation
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface PresentationCarouselProps {
  action: () => void;
}

const PresentationCarousel: NextPage<PresentationCarouselProps> = ({ action }) => {
  const [index, setIndex] = useState(0);
  const categories = ['New Faces', 'Helps', 'Interestings', 'Events', 'Shoutouts'];

  const withinLowerBound = (index: number): boolean => {
    return index > 0;
  };

  const withinUpperBound = (index: number): boolean => {
    return index <= categories.length;
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    switch (e.key) {
      case LEFT_ARROW:
        if (withinLowerBound(index)) {
          setIndex(index - 1);
        }
        break;
      case RIGHT_ARROW:
        if (withinUpperBound(index)) {
          setIndex(index + 1);
        }
        break;
      case ESCAPE:
        action();
        break;
      default:
    }
  };

  useEvent(window, 'keydown', handleKeyDown);

  const renderPage = (index: number): JSX.Element => {
    if (index === 0) {
      return <PresentationStart action={action} />;
    } else if (withinUpperBound(index)) {
      return <PresentationItemCategory title={categories[index - 1]} items={stubItems} />;
    } else {
      return <PresentationEnd action={action} />;
    }
  };

  return renderPage(index);
};

export default PresentationCarousel;
