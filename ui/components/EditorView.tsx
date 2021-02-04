import { useEffect, useState } from 'react';
import AppBar from '@components/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ItemCategory from '@components/ItemCategory';
import ItemDto from '@models/ItemDto';
import { NextPage } from 'next';
import { getStandups } from '@api/getStandups';
import { mapItemsToCategories } from '@lib/itemMapper';

interface EditorPageProps {
  handleModeChange: () => void;
  categories: string[];
  items: ItemDto[];
}

const EditorView: NextPage<EditorPageProps> = ({ handleModeChange, categories, items }) => {
  const standups = getStandups();
  const [itemsMapping, setItemsMapping] = useState(mapItemsToCategories(items));

  useEffect(() => {
    setItemsMapping(mapItemsToCategories(items));
  }, [items]);

  return (
    <>
      <AppBar standups={standups} />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} key={category}>
              <ItemCategory title={category} items={itemsMapping.get(category)} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button color="primary" variant="contained" onClick={handleModeChange}>
              Presentation
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditorView;
