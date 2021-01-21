import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as Colors from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  appBar: {
    color: Colors.common.white,
    height: 40,
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  offset: theme.mixins.toolbar,
}));

const Header3Component = (props) => {
  const classes = useStyles();
  const history = useHistory();
  
  return (
    <header>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="arrowBack"
            className={classes.button}
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            align="center" children={props.title}
            variant="h6"
            className={classes.root}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </header>
  );
};

export default Header3Component;
