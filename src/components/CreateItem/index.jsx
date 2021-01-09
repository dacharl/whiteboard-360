import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function CreateItem() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography>Create a new post!</Typography>
      </Grid>
      <Grid item>
        <TextField
          id="title"
          type="text"
          label="Title"
          variant="filled"
          placeholder="Enter a title for the post"
        />
      </Grid>
      <Grid item>
        <TextField
          id="author"
          type="text"
          label="Author"
          variant="filled"
          placeholder="Enter your name"
        />
      </Grid>
      <Grid item>
        <TextField
          id="description"
          type="text"
          label="Description"
          variant="filled"
          multiline
          placeholder="Enter a description for the post"
        />
      </Grid>
    </Grid>
  );
}

export default CreateItem;
