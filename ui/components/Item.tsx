import ItemModel from '@models/ItemModel';
import { NextPage } from 'next';
import Typopgraphy from '@material-ui/core/Typography';

interface ItemProps {
  item: ItemModel;
}

const Item: NextPage<ItemProps> = ({ item }) => {
  const itemHeading = `${item.date} ${item.title} ${item.author ? '- ' + item.author : ''}`;
  return item ? (
    <>
      <Typopgraphy variant="h6">{itemHeading}</Typopgraphy>
      <Typopgraphy variant="body1">{item.description}</Typopgraphy>
    </>
  ) : (
    <></>
  );
};

export default Item;
