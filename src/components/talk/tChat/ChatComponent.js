import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setText, initialMessage } from "../../../slices/chat";
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';

import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@material-ui/core/colors';

import Message from './Message.js'

import {firebaseDb} from '../../../plugins/firebase';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: Colors.common.white,
    top: 'auto',
    bottom: 0,
  },
  TC:{
    width:'100%',
    color: '#000000',
    background:'#fff',
  },
  input: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  offset: theme.mixins.toolbar,
}));

const ChatComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.userId);
  const text = useSelector(state => state.chat.text);
  const row = useSelector(state => state.chat.row);

  const today = new Date().toLocaleString();

  const roomId = useSelector(state => state.chat.id);
  const ref = firebaseDb.ref('chat/' +roomId);
  let chat = [];
  ref.on('child_added', (snapshot) => {
    const m = snapshot.val();
    chat.push({
        'userId' : m.userId,
        'text' : m.text,
        'today' : m.today,
        'key': snapshot.key,
    });
    
    localStorage.removeItem(roomId);
    localStorage.setItem(roomId, JSON.stringify(chat));
  });

  const chatRoom = () => {
    let messages = [];
    const msgs = JSON.parse(localStorage.getItem(roomId));
    if(msgs !== null) {
      messages = msgs;
    };

    return messages.map((m, i) => {
      return <Message key={i} message={m} />
    });
  };

  const handTextPush = () => {
    if (text === "") {
        alert('text empty');
        return;
    };
    ref.push({
      "userId" : userId,
      "text" : text,
      'today' : today,
    });
    const recentRef = firebaseDb.ref('chat/recent/' +roomId);
    const date = (new Date().getTime()) * -1;
    date.toLocaleString();
    recentRef.set({
      "text" : text,
      "time": date,
      "today" : today,
    });
    dispatch(initialMessage());
  };

  return (
    <div >
      <div className="Message">
        {chatRoom()}
      </div>
      <footer>
        <div className={classes.offset} />
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <OutlinedInput
              id="outlined-text" color="secondary"
              className={classes.TC} value={text}
              onChange={e => dispatch(setText(e.target.value))}
              multiline rows={row}
            />

            <IconButton
              aria-label="exit" color="inherit"
              edge="end" className={classes.button}
              onClick={handTextPush}
            >
              <SendIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </footer>
    </div>
  );
};

export default ChatComponent;
