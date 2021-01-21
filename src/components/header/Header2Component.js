import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from '../../slices/auth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import SmsIcon from '@material-ui/icons/Sms';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as Colors from '@material-ui/core/colors';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    color: Colors.common.white,
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    marginRight: theme.spacing(0),
  },
  offset: theme.mixins.toolbar,

  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  avatar: {
    margin: 'auto',
  },
}));

const Header2Component = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const profileImage = useSelector(state => state.auth.user.profileImage);
  const userName = useSelector(state => state.auth.user.userName);
  const userId = useSelector(state => state.auth.user.userId);
  const text = userName +"\nID:" +userId;

  const [open, setOpen] = React.useState(false);

  const drawer = () => {
    return (
      <div>
        <div className={classes.drawerHeader}>
          <Avatar className={classes.avatar} src={profileImage} />
          <Typography
            component="span"
            color="textPrimary"
          >
            {text.split("\n").map((t, i) => {
              return <div key={i}>{t}</div>
            })}
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => {(history.push('/home2'));setOpen(false);}}>
            <IconButton
              className={classes.button}
              aria-label="home"
            >
              <HomeIcon />
            </IconButton>
            <ListItemText primary={"ホーム"} />
          </ListItem>
          <ListItem button onClick={() => {(history.push('/home2/talk'));setOpen(false);}}>
            <IconButton
              className={classes.button}
              aria-label="sms"
            >
              <SmsIcon />
            </IconButton>
            <ListItemText primary={"トーク"} />
          </ListItem>
          <ListItem button onClick={() => {(history.push('/home2/book'));setOpen(false);}}>
            <IconButton
              className={classes.button}
              aria-label="assignment"
            >
              <AssignmentIcon />
            </IconButton>
            <ListItemText primary={"書類管理"} />
          </ListItem>
          <ListItem button onClick={() => {(history.push('/home2/settings'));setOpen(false);}}>
            <IconButton
              className={classes.button}
              aria-label="settings"
            >
              <SettingsIcon />
            </IconButton>
            <ListItemText primary={"設定"} />
          </ListItem>
        </List>
      </div>
    );
  };

  return (
    <header>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            align="center" children={props.title}
            variant="h6"
            className={classes.root}
          />

          <IconButton
            edge="end"
            color="inherit"
            aria-label="exit"
            onClick={() => {
              dispatch(logout());
            }}
            className={classes.button}
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Hidden mdUp>
        <Drawer
          className={classes.drawer} anchor="left" 
          variant="temporary" open={open}
          onClose={() => setOpen(false)}
          classes={{ paper: classes.drawerPaper, }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer()}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper, }}
        >
          {drawer()}
        </Drawer>
      </Hidden>
      <div className={classes.offset} />
    </header>
  );
};

export default Header2Component;
