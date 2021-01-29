import { ArrowNavigation, useArrowNavigation } from 'react-arrow-navigation';
import { useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { NextPage } from 'next';
import PresentationItemCategory from '@components/PresentationItemCategory';
import stubItems from '@models/ItemModel.stub';

interface NavigationChildProps {
  xIndex: number;
  yIndex: number;
}

const NavigationChild: NextPage<NavigationChildProps> = ({ xIndex, yIndex }) => {
  const { selected, active } = useArrowNavigation(xIndex, yIndex);

  const categories = ['New Faces', 'Helps', 'Interestings', 'Events', 'Shoutouts'];
  return active && selected ? <PresentationItemCategory title={categories[xIndex]} items={stubItems} /> : <></>;
};
interface PresentationPageProps {
  action: () => void;
}

const PresentationPage: NextPage<PresentationPageProps> = ({ action }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  });

  return (
    <Container maxWidth="xl">
      <ArrowNavigation ref={ref} tabIndex={0}>
        <NavigationChild xIndex={0} yIndex={0} />
        <NavigationChild xIndex={1} yIndex={0} />
        <NavigationChild xIndex={2} yIndex={0} />
        <NavigationChild xIndex={3} yIndex={0} />
        <NavigationChild xIndex={4} yIndex={0} />
      </ArrowNavigation>
      <Button color="primary" variant="contained" onClick={action}>
        Exit Presentation
      </Button>
    </Container>
  );
};

export default PresentationPage;
