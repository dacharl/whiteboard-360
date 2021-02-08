import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import ItemDto from '@models/ItemDto';
import { NextPage } from 'next';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

interface ItemFormProps {
  category: string;
  standupId: string;
  open: boolean;
  handleCancel: () => void;
  handleSubmit: (item: ItemDto, incomingItem?: ItemDto) => void;
  incomingItem?: ItemDto;
}

const ItemForm: NextPage<ItemFormProps> = ({ category, standupId, open, handleCancel, handleSubmit, incomingItem }) => {
  const [item, setItem] = useState(incomingItem || { itemId: '', standupId: standupId, category: category, title: '', author: '', date: '', description: '' });

  return (
    <Dialog open={open} onClose={handleCancel} fullWidth>
      <DialogTitle>New Item for {category}</DialogTitle>
      <DialogContent>
        <DialogContentText>Talk about something here.</DialogContentText>
        <Grid container spacing={2} direction="column" alignItems="stretch">
          <Grid item>
            <TextField
              value={item.title}
              onChange={(e) => setItem({ ...item, title: e.target.value })}
              variant="outlined"
              label="Title"
              id="title-input"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={item.author}
              onChange={(e) => setItem({ ...item, author: e.target.value })}
              variant="outlined"
              label="Author"
              id="author-input"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={item.date}
              onChange={(e) => setItem({ ...item, date: e.target.value })}
              variant="outlined"
              label="Date"
              id="date-input"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={item.description}
              onChange={(e) => setItem({ ...item, description: e.target.value })}
              variant="outlined"
              label="Description"
              id="description-input"
              multiline
              rows={3}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => {
            incomingItem ? handleSubmit(item, incomingItem) : handleSubmit(item);
            setItem({ itemId: '', standupId: standupId, category: category, title: '', author: '', date: '', description: '' });
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemForm;
