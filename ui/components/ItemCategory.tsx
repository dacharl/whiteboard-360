import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Item from '@components/Item';
import ItemModel from '@models/ItemModel';
import { NextPage } from 'next';

interface AddItemButtonProps {
  category: string;
}

const AddItemButton: NextPage<AddItemButtonProps> = ({ category }) => {
  return (
    <IconButton color="primary" aria-label="add item" component="span" onClick={() => alert(`new item for ${category.toLowerCase()}`)}>
      <AddCircleOutlineRoundedIcon fontSize="large" />
    </IconButton>
  );
};

interface ItemCategoryProps {
  title: string;
  items: ItemModel[];
}

const ItemCategory: NextPage<ItemCategoryProps> = ({ title, items }) => {
  return (
    <Card>
      <CardHeader title={title} action={<AddItemButton category={title} />} />
      <CardContent>
        {items.map((item: ItemModel, index) => (
          <Item key={`${item.title}-${index}`} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ItemCategory;
