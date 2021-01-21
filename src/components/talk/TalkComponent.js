import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { chat } from "../../slices/chat";
import { makeStyles } from '@material-ui/core/styles';

import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import {firebaseDb} from '../../plugins/firebase';

const ref = firebaseDb.ref('users');
let teachers = [], students = [];
ref.on('child_added', (snapshot) => {
  const m = snapshot.val();
  const key = snapshot.key;
  if(key.slice(0, 2) === "00") {
    teachers.push({
      'userName' : m.userName,
      'profileImage' : m.profileImage,
      'key': snapshot.key,
    });
  }
  else {
    students.push({
      'userName' : m.userName,
      'profileImage' : m.profileImage,
      'key': snapshot.key,
    });
  };
});

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: 90,
    },
  },
  root2: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: 135,
    },
  },
  nav: {
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: 90,
    },
  },
  lbutton: {
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: 90,
    },
  },
  rbutton: {
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      marginRight: 90,
    },
  },
}));

const TalkComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const userId = useSelector(state => state.auth.user.userId);
  const id = userId;

  let str = "", str2 = "";

  // 履歴参照
  const recentRef = firebaseDb.ref('chat/recent');
  let recentS = [], recentT = [];
  recentRef.orderByChild('time').on('child_added', (snapshot) => {
    const m = snapshot.val();
    const key = snapshot.key;
    if(key.slice(6, 12) === userId) {       // 生徒用
      teachers.map((m, i) => {
        if(key.slice(0, 6) === m.key) {
          str = m.userName;
          str2 = m.profileImage;
        };
        return i;
      });
      recentS.push({
        'userName' : str,
        'profileImage' : str2,
        'text' : m.text,
        'today' : m.today,
        'key': key.slice(0, 6),
      });
    }
    else if(key.slice(0, 6) === userId) {   // 講師用
      students.map((m, i) => {
        if(key.slice(6, 12) === m.key) {
          str = m.userName;
          str2 = m.profileImage;
        };
        return i;
      });
      recentT.push({
        'userName' : str,
        'profileImage' : str2,
        'text' : m.text,
        'today' : m.today,
        'key': key.slice(6, 12),
      });
    };
  });

  const pushChatS = async(props) => {
    teachers.map((m, i) => {
      if(props === m.key) {
        str = m.userName;
        str2 = m.profileImage;
      };
      return i;
    });
    await dispatch(chat((props +userId), str2));
    history.push('/home/talk/tChat?page=' +str);
  };
  const pushChatT = async(props) => {
    students.map((m, i) => {
      if(props === m.key) {
        str = m.userName;
        str2 = m.profileImage;
      };
      return i;
    });
    await dispatch(chat((userId +props), str2));
    history.push('/home2/talk/tChat?page=' +str);
  };

  const cmp = () => {
    if(id.slice(0, 2) !== "00") {
      //生徒画面用
      if(value === 0) {
        return teachers.map((m, i) => {
          return (
            <div key={i}>
              <List className={classes.root2}>
                <ListItem button onClick={() => pushChatS(m.key)}>
                  <ListItemAvatar>
                    <Avatar className="" src={m.profileImage} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          color="textPrimary"
                        >
                          {m.userName}　先生
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </div>
          )
        });
      }
      else {
        return recentS.map((m, i) => {
          return (
            <div key={i}>
              <List className={classes.root2}>
                <ListItem button onClick={() => pushChatS(m.key)}>
                  <ListItemAvatar>
                    <Avatar className="" src={m.profileImage} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          color="textPrimary"
                        >
                          {m.userName}　先生
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        {m.text}
                        <br/>
                        {m.today}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </div>
          )
        });
        
      };
    }
    else {
      //講師画面用
      if(value === 0) {
        return students.map((m, i) => {
          return (
            <div key={i}>
              <List className={classes.root2}>
                <ListItem button onClick={() => pushChatT(m.key)}>
                  <ListItemAvatar>
                    <Avatar className="" src={m.profileImage} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          color="textPrimary"
                        >
                          {m.userName}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </div>
          )
        });
      }
      else {
        return recentT.map((m, i) => {
          return (
            <div key={i}>
              <List className={classes.root2}>
                <ListItem button onClick={() => pushChatT(m.key)}>
                  <ListItemAvatar>
                    <Avatar className="" src={m.profileImage} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          color="textPrimary"
                        >
                          {m.userName}
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        {m.text}
                        <br/>
                        {m.today}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </div>
          )
        });
      };
    };
  };

  return (
    <div className={classes.root}>
      <div>
        {cmp()}
      </div>
      <div className={classes.nav}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="友達" className={classes.lbutton} icon={<PeopleAltIcon />} />
          <BottomNavigationAction label="履歴" className={classes.rbutton} icon={<RestoreIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
};

export default TalkComponent;
