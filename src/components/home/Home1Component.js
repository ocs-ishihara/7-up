import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import HomeMessage from './HomeMessage'
import Header from '../header/Header1Component';

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
}));

const Home1Component = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <div>
          <Header title="ホーム" />
        </div>
      </div>
      <div className="Message">
        {messages.map((m, i) => {
          return <HomeMessage key={i} home={m} teachers={teachers} />
        })}
      </div>
    </div>
  );
};

export default Home1Component;
