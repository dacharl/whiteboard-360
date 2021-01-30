import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { NextPage } from 'next';
import TextField from '@material-ui/core/TextField';

interface ItemFormProps {
  category: string;
  open: boolean;
  handleCancel: () => void;
  handleSubmit: () => void;
}

const ItemForm: NextPage<ItemFormProps> = ({ category, open, handleCancel, handleSubmit }) => {
  return (
    <Dialog open={open} onClose={handleCancel} fullWidth>
      <DialogTitle>New Item for {category}</DialogTitle>
      <DialogContent>
        <DialogContentText>Talk about something here.</DialogContentText>
        <Grid container spacing={2} direction="column" alignItems="stretch">
          <Grid item>
            <TextField variant="outlined" label="Title" id="title-input" fullWidth />
          </Grid>
          <Grid item>
            <TextField variant="outlined" label="Author" id="author-input" fullWidth />
          </Grid>
          <Grid item>
            <TextField variant="outlined" label="Date" id="date-input" type="date" InputLabelProps={{ shrink: true }} fullWidth />
          </Grid>
          <Grid item>
            <TextField variant="outlined" label="Description" id="description-input" multiline rows={3} fullWidth />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemForm;
