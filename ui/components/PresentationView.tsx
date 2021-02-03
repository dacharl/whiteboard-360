import Container from '@material-ui/core/Container';
import { NextPage } from 'next';
import PresentationCarousel from '@components/PresentationCarousel';

interface PresentationPageProps {
  handleModeChange: () => void;
  categories: string[];
}

const PresentationView: NextPage<PresentationPageProps> = ({ handleModeChange, categories }) => {
  return (
    <Container maxWidth="xl" style={{ padding: '0' }}>
      <PresentationCarousel handleModeChange={handleModeChange} categories={categories} />
    </Container>
  );
};

export default PresentationView;
