import { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import ItemDto from '@models/ItemDto';
import { NextPage } from 'next';
import PresentationCarousel from '@components/PresentationCarousel';
import { mapItemsToCategories } from '@lib/itemMapper';

interface PresentationPageProps {
  handleModeChange: () => void;
  categories: string[];
  items: ItemDto[];
}

const PresentationView: NextPage<PresentationPageProps> = ({ handleModeChange, categories, items }) => {
  const [itemsMapping, setItemsMapping] = useState(mapItemsToCategories(items));

  useEffect(() => {
    setItemsMapping(mapItemsToCategories(items));
  }, [items]);

  return (
    <Container maxWidth="xl" style={{ padding: '0' }}>
      <PresentationCarousel handleModeChange={handleModeChange} categories={categories} items={itemsMapping} />
    </Container>
  );
};

export default PresentationView;
