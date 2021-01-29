import { NextPage } from 'next';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ItemForm: NextPage = () => {
  return (
    <Grid container>
      <Grid item sm={6}>
        <Card elevation={2}>
          <CardContent>
            <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={2}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="h3">
                  New Item
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Talk about something here.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Title" id="title-input" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Author" id="author-input" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Date" id="date-input" type="date" InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Description" id="description-input" multiline rows={3} />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item>
                <Button color="primary">Cancel</Button>
              </Grid>
              <Grid item>
                <Button color="primary">Submit</Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ItemForm;
