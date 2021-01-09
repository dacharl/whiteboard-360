import Container from '@material-ui/core/Container';
import Post from '../Post';
import { items } from '../../resources/postStub';
import './App.css';

function App() {
  return (
    <Container>
      <Post items={items} />
    </Container>
  );
}

export default App;
