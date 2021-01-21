import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import {firebaseDb} from '../../plugins/firebase';
const ref = firebaseDb.ref('less');

const useStyles = makeStyles((theme) => ({
  root1:{
    textAlign: 'center',
    fontSize: 18,
  },
  root2:{
    width: 500,
  },
  root3:{
    width: 50,
  },
  Papar:{
    padding: 10,
    width: 600,
    margin: 'auto',
    //backgroundColor: theme.palette.primary.light,
    //backgroundColor: theme.palette.background.default,
  },
  Rbutton: {
    width: 100,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#5cca13',
    margin:20,
      '&:hover' :{
        background: '#4eaa10',
      },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const LessComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const id = useSelector(state => state.auth.user.userId);

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    title: '',
    less: '',
  });
  console.log(values.less);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickOpen = () => {
    let alert_text = "";
    let cnt = 0;

    if(values.Less === "") {
      alert_text = "内容が入力されていません。\n";
      cnt += 1;
    }
    if(cnt > 0) {
      alert(alert_text);
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const day = new Date().toLocaleString();

  const handleOnClickI = () => {
    alert('投稿完了しました。\nタイムラインへ戻ります');
    history.push('/home2');

    ref.push({
      "title" : values.title,
      "less" : values.less,
      "id" : id,
      "day" : day,
    });
  };

  return (
    <div>
      <Paper className={classes.Papar}>
        <div className={classes.root1} >
          <p>件名を入力</p>
          <TextField
            className={classes.root2}
            name='title'
            variant="outlined"
            multiline
            value={values.title}
            onChange={handleChange('title')}
          />
          <p>投稿内容を入力</p>
          <TextField
            className={classes.root2}
            name='less'
            variant="outlined"
            multiline
            rows={20}
            value={values.less2}
            onChange={handleChange('less')}
          />

          <br/>
          <Button
            className={classes.Rbutton} 
            onClick={handleClickOpen}>投稿
          </Button>
            
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"投稿しますか？"}</DialogTitle>
            <DialogActions>
              <Button onClick={handleOnClickI} color="primary">
                はい
              </Button>
              <Button onClick={handleClose} color="primary">
                いいえ
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Paper>
    </div>
  );
};

export default LessComponent;
