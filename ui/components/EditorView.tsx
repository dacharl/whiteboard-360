import AppBar from '@components/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ItemCategory from '@components/ItemCategory';
import { NextPage } from 'next';
import { getStandups } from '@api/getStandups';
import stubItems from '@models/ItemModel.stub';

interface EditorPageProps {
  handleModeChange: () => void;
  categories: string[];
}

const EditorView: NextPage<EditorPageProps> = ({ handleModeChange, categories }) => {
  const standups = getStandups();

  return (
    <>
      <AppBar standups={standups} />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} key={category}>
              <ItemCategory title={category} items={stubItems} />
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
