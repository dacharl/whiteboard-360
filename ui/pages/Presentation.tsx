import Container from '@material-ui/core/Container';
import { NextPage } from 'next';
import PresentationCarousel from '@components/PresentationCarousel';

interface PresentationPageProps {
  action: () => void;
}

const PresentationPage: NextPage<PresentationPageProps> = ({ action }) => {
  return (
    <Container maxWidth="xl" style={{ padding: '0' }}>
      <PresentationCarousel action={action} />
    </Container>
  );
};

export default PresentationPage;
