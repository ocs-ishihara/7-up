import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import Avatar from '@material-ui/core/Avatar';

const Message = (props) => {
  const mode = useSelector(state => state.dark.mode);
  let a  = "";
  let b  = "";
  if (mode) {
    a  = '#fff';
    b  = '#808080';
  }
  else {
    a  = '#000000';
    b  = '#E5E5E5';
  };

  // 見た目
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      marginBottom: 20,
    },
    my: {
      marginLeft: 'auto',
    },
    your: {
      marginRight: 'auto',
    },
    Area:{
      width:800,
      marginLeft:'auto',
      marginRight:'auto',
    },
    CS:{
      wordBreak: 'break-all',
      padding: '20px 30px',
      color: '#000000',
      borderRadius: 40,
      background: '#9FD9F6',
    },
    CT:{
      wordBreak: 'break-all',
      padding: '20px 30px',
      color: a,
      borderRadius: 40,
      background: b,
    },
  }));

  const classes = useStyles();
  const userId = useSelector(state => state.auth.user.userId);
  const profileImage = useSelector(state => state.chat.image);

  const formatText = () => {
    if(props.message.userId === userId) {
      return (
        <div>
          <ListItem>
            <div className={classes.my}>
              <ListItemText className={classes.CS}
                primary={
                  <React.Fragment>
                    {(props.message.text).split("\n").map((t, i) => {
                      return <div key={i}>{t}</div>
                    })}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    {props.message.today}
                  </React.Fragment>
                }
              />
            </div>
            </ListItem>
        </div>
      );
    }
    else {
      return (
        <div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar className="" src={profileImage} />
            </ListItemAvatar>
            <div className={classes.your}>
              <ListItemText className={classes.CT}
                primary={
                  <React.Fragment>
                    {(props.message.text).split("\n").map((t, i) => {
                      return <div key={i}>{t}</div>
                    })}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    {props.message.today}
                  </React.Fragment>
                }
              />
            </div>
          </ListItem>
        </div>
      );
    }
  };

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <List>
          {formatText()}
        </List>
      </div>
    </div>
  );
};

export default Message;
