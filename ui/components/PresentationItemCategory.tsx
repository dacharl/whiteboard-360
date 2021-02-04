import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ItemDto from '@models/ItemDto';
import { NextPage } from 'next';
import PresentationItem from '@components/PresentationItem';

interface PresentationItemCategoryProps {
  title: string;
  items: ItemDto[];
}

const PresentationItemCategory: NextPage<PresentationItemCategoryProps> = ({ title, items }) => {
  return (
    <Card style={{ height: '100vh' }} square>
      <CardHeader title={title} />
      <CardContent>
        {items.map((item: ItemDto, index) => (
          <PresentationItem key={`${item.title}-${index}`} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default PresentationItemCategory;
