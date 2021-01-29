import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import ItemModel from '@models/ItemModel';
import { NextPage } from 'next';
import PresentationItem from '@components/PresentationItem';

interface ItemCategoryProps {
  title: string;
  items: ItemModel[];
}

const ItemCategory: NextPage<ItemCategoryProps> = ({ title, items }) => {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        {items.map((item: ItemModel, index) => (
          <PresentationItem key={`${item.title}-${index}`} item={item} />
        ))}
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item>
            <Button color="primary" onClick={() => alert(`exit from ${title.toLowerCase()}`)}>
              Exit Presentation
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ItemCategory;
