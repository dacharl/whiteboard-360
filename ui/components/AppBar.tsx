import AppBar from '@material-ui/core/AppBar';
import { NextPage } from 'next';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const WhiteboardAppBar: NextPage = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Whiteboard 360</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default WhiteboardAppBar;
