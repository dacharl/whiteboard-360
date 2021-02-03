import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import Link from 'next/link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NextPage } from 'next';
import StandupDto from '@models/StandupDto';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type MuiMenuLinkItemProps = { children: React.ReactNode; href?: string; passHref?: boolean };
const MuiMenuLinkItem = React.forwardRef<HTMLDivElement, MuiMenuLinkItemProps>(({ children, href, passHref }, ref) => {
  const muiMenuItemRef = React.useRef();

  return (
    <div ref={ref}>
      <Link href={href} passHref={passHref}>
        <MenuItem ref={muiMenuItemRef} component="a">
          {children}
        </MenuItem>
      </Link>
    </div>
  );
});
MuiMenuLinkItem.displayName = 'MuiMenuLinkItem';

interface WhiteboardAppBarProps {
  standups: StandupDto[];
}

const WhiteboardAppBar: NextPage<WhiteboardAppBarProps> = ({ standups }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (e): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <DeveloperBoardIcon fontSize="large" /> */}
        <Typography className={classes.title} variant="h5">
          Whiteboard 360
        </Typography>
        <div>
          {standups && (
            <>
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
                {standups.map(({ id, name }) => (
                  <MuiMenuLinkItem key={id} href={`/standup/${id}`} passHref>
                    {name}
                  </MuiMenuLinkItem>
                ))}
              </Menu>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default WhiteboardAppBar;
