import { NextPage } from 'next';

export interface ItemModel {
  title: string;
  author?: string;
  date: string;
  description?: string;
}

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
