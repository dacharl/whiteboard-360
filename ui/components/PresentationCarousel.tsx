import { ESCAPE, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@constants/Keys';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ItemDto from '@models/ItemDto';
import { NextPage } from 'next';
import PresentationItemCategory from './PresentationItemCategory';
import { Typography } from '@material-ui/core';
import useEvent from '@react-hook/event';

interface PresentationBookendProps {
  handleModeChange: () => void;
}

const PresentationStart: NextPage<PresentationBookendProps> = ({ handleModeChange }) => {
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
            <Button color="primary" variant="contained" onClick={handleModeChange}>
              Exit Presentation
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const PresentationEnd: NextPage<PresentationBookendProps> = ({ handleModeChange }) => {
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
            <Button color="primary" variant="contained" onClick={handleModeChange}>
              Exit Presentation
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface PresentationCarouselProps {
  handleModeChange: () => void;
  categories: string[];
  items: Map<string, ItemDto[]>;
}

const PresentationCarousel: NextPage<PresentationCarouselProps> = ({ handleModeChange, categories, items }) => {
  const [index, setIndex] = useState(0);
  const [itemMapping, setItemMapping] = useState(items);

  useEffect(() => {
    setItemMapping(items);
  }, [items]);

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
      case SPACE:
      case RIGHT_ARROW:
        if (withinUpperBound(index)) {
          setIndex(index + 1);
        }
        break;
      case ESCAPE:
        handleModeChange();
        break;
      default:
    }
  };

  useEvent(window, 'keydown', handleKeyDown);

  const renderPage = (index: number): JSX.Element => {
    if (index === 0) {
      return <PresentationStart handleModeChange={handleModeChange} />;
    } else if (withinUpperBound(index)) {
      const category = categories[index - 1];
      return <PresentationItemCategory title={category} items={itemMapping.get(category)} />;
    } else {
      return <PresentationEnd handleModeChange={handleModeChange} />;
    }
  };

  return renderPage(index);
};

export default PresentationCarousel;
