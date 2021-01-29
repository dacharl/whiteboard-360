import { NextPage } from 'next';
import Item, { ItemModel } from '@components/Item';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
          <Item key={`${item.title}-${index}`} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ItemCategory;
