import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import HomeMessage from './HomeMessage';
import Header2 from '../header/Header2Component';

import {firebaseDb} from '../../plugins/firebase';
const ref = firebaseDb.ref('less');
let messages = [];
ref.on('child_added', (snapshot) => {
    const m = snapshot.val();

    messages.unshift({
      "title" : m.title,
      "less" : m.less,
      "id" : m.id,
      "day" : m.day,
      'key': snapshot.key,
    });
});
const ref2 = firebaseDb.ref('users');
let teachers = [];
ref2.on('child_added', (snapshot) => {
  const m = snapshot.val();
  const key = snapshot.key;
  if(key.slice(0, 2) === "00") {
    teachers.push({
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
      marginLeft: 225,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
}));

const Home2Component = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <div>
          <Header2 title="ホームページ" />
        </div>
        <div className="Message">
          {messages.map((m, i) => {
            console.log(m);
            return <HomeMessage key={i} home={m} teachers={teachers} />
          })}
        </div>
      </div>
      <Fab
        className={classes.margin}
        size="small"
        color="secondary"
        aria-label="add"
        onClick={() => history.push('/home2/less')}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Home2Component;
