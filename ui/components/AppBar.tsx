import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NextPage } from 'next';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const WhiteboardAppBar: NextPage = () => {
  const classes = useStyles();
  const standups = ['Columbus', 'Dallas', 'Atlanta'];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (e): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleStandupSelected = (standup): void => {
    alert(`fetch ${standup} items`);
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <DeveloperBoardIcon fontSize="large" />
        <Typography className={classes.title} variant="h5">
          Whiteboard 360
        </Typography>
        <div>
          <Button
            className={classes.menuButton}
            aria-label="whiteboard standups"
            aria-controls="standup-menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
            size="large"
          >
            Standups
          </Button>
          <Menu id="standup-menu-appbar" anchorEl={anchorEl} open={open} onClose={handleClose}>
            {standups.map((standup, i) => (
              <MenuItem key={`${standup}-${i}`} onClick={() => handleStandupSelected(standup)}>
                {standup}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default WhiteboardAppBar;
