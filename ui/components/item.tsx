import { NextPage } from 'next';

interface Props {
  item: {
    title: string;
    author?: string;
    date: string;
    description?: string;
  };
}

const Item: NextPage<Props> = ({ item }) => {
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
