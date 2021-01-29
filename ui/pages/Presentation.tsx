import Button from '@material-ui/core/Button';
import { NextPage } from 'next';

interface PresentationPageProps {
  action: () => void;
}

const PresentationPage: NextPage<PresentationPageProps> = ({ action }) => {
  return (
    <Button color="primary" onClick={action}>
      Exit Presentation
    </Button>
  );
};

export default PresentationPage;
