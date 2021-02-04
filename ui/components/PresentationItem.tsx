import ItemDto from '@models/ItemDto';
import { NextPage } from 'next';
import Typopgraphy from '@material-ui/core/Typography';

interface PresentationItemProps {
  item: ItemDto;
}

const PresentationItem: NextPage<PresentationItemProps> = ({ item }) => {
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

export default PresentationItem;
