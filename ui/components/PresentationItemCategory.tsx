import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ItemModel from '@models/ItemModel';
import { NextPage } from 'next';
import PresentationItem from '@components/PresentationItem';

interface PresentationItemCategoryProps {
  title: string;
  items: ItemModel[];
}

const PresentationItemCategory: NextPage<PresentationItemCategoryProps> = ({ title, items }) => {
  return (
    <Card style={{ height: '100vh' }}>
      <CardHeader title={title} />
      <CardContent>
        {items.map((item: ItemModel, index) => (
          <PresentationItem key={`${item.title}-${index}`} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default PresentationItemCategory;
