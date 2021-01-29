import ItemModel from '@models/ItemModel';
import { NextPage } from 'next';

interface ItemProps {
  item: ItemModel;
}

const Item: NextPage<ItemProps> = ({ item }) => {
  const itemHeading = `${item.date} ${item.title} ${item.author ? '- ' + item.author : ''}`;
  return item ? (
    <>
      <p>{itemHeading}</p>
      <p>{item.description}</p>
    </>
  ) : (
    <></>
  );
};

export default Item;
