import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { initialOneData } from "../../../slices/history";
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { Radio, RadioGroup } from '@material-ui/core';
import { FormControl, FormControlLabel } from '@material-ui/core';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';

import {firebaseDb} from '../../../plugins/firebase';
const ref = firebaseDb.ref('report/training');

let keyIn = 0;
let data = {};

const useStyles = makeStyles((theme) => ({
  root:{
    textAlign: 'center',
    fontSize: 18,
  },
  check1:{
    color: '#ff0000'
  },
  haikei :{
    margin: 'auto',
    //textAlign:'right',
    width: 320,
    height: 45,
  },
  Rbutton: {
    width: '100px',
    height: '50px',
    fontWeight: 'bold',
    color: '#FFF',
    background: '#5cca13',
    margin: '40px',
    '&:hover': {
      background: ' #4eaa10',
    },
  },
  size :{
    width: 320,
    backgroundColor: theme.palette.background.paper,
  },
  size1 :{
    width: 155,
  },
}));

const TrainingComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.userId);
  const name = useSelector(state => state.auth.user.userName);
  const oneData = useSelector(state => state.history.oneData);
  const [flag, setFlag] = React.useState(true);
  // 初期化
  if(flag){
    let data2 = {};
    data2.company = ""; data2.location = "";
    data2.facility = "";  data2.address = "";
    data2.training_start = "";  data2.training_end = "";
    data2.time_start = ""; data2.time_end = "";
    data2.detail = ""; data2.impressions = "";
    data = data2;
    setFlag(false);
  };
  if(oneData !== null) {
    keyIn = 1;
    data = oneData;
    dispatch(initialOneData());
  };
  const [values, setValues] = React.useState({
    company: data.company, location: data.location,
    facility: data.facility, address: data.address,
    training_start: data.training_start, training_end: data.training_end,
    time_start: data.time_start, time_end: data.time_end,
    detail: data.detail, impressions: data.impressions,
  });
  const [open, setOpen] = React.useState(false);

  const [check1, setCheck1] = React.useState("");
  const [check2, setCheck2] = React.useState("");
  const [check3, setCheck3] = React.useState("");
  const [check4, setCheck4] = React.useState("");
  const [check5, setCheck5] = React.useState("");
  const [check6, setCheck6] = React.useState("");
  const [check7, setCheck7] = React.useState("");
  const [check8, setCheck8] = React.useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

    if(event.target.value.length > 0){
      if(prop === 'company'){
        setCheck1("");
      }
      if(prop === 'location'){
        setCheck2("");
      }
      if(prop === 'facility'){
        setCheck3("");
      }
      if(prop === 'address'){
        setCheck4("");
      }
      if(prop === 'training_start'){
        setCheck5("");
      }
      if(prop === 'training_end'){
        setCheck5("");
      }
      if(prop === 'time_start'){
        setCheck6("");
      }
      if(prop === 'values.time_end'){
        setCheck6("");
      }
      if(prop === 'detail'){
        setCheck7("");
      }
      if(prop === 'impressions'){
        setCheck8("");
      }
    }
  };

  const handleClickOpen = () => {
    let cnt = 0;

    if(values.company === "") {
      setCheck1("※企業名が入力されていません");
      cnt += 1;
    }
    if(values.location === "") {
      setCheck2("※会場が選択されていません");
      cnt += 1;
    }
    if(values.location === "別会場") {
      if(values.facility === "") {
        setCheck3("※研修施設名が入力されていません");
        cnt += 1;
      }
    }
    if(values.address === "") {
      setCheck4("※住所が入力されていません");
      cnt += 1;
    }
    if(values.training_start === "" || values.training_end === "") {
      setCheck5("※研修期間が選択されていません");
      cnt += 1;
    }
    if(values.training_start === values.training_end) {
      if(values.time_start === "" || values.time_end === "") {
        setCheck6("※実施時刻が選択されていません");
        cnt += 1;
      }
    }
    if(values.detail === "") {
      setCheck7("※研修内容が入力されていません");
      cnt += 1;
    }
    if(values.impressions === "") {
      setCheck8("※感想が入力されていません");
      cnt += 1;
    }
    
    if(cnt === 0) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const day = new Date().toLocaleString();
  const today = (new Date().getTime()) * -1;
  today.toLocaleString();

  const handleOnClickI = () => {
    const usersRef = ref.child(userId);
    if(keyIn === 0) {
      usersRef.push({
        "company" : values.company,
        "location" : values.location,
        "facility" : values.facility,
        "address" : values.address,
        "training_start" : values.training_start,
        "training_end" : values.training_end,
        "time_start" : values.time_start,
        "time_end" : values.time_end,
        "detail" : values.detail,
        "impressions" : values.impressions,
        "today" : today,
        "day" : day,
        "name" : name,
      });
    }
    else {
      keyIn = 0;
      const updateRef = usersRef.child(data.key);
      updateRef.set({
        "company" : values.company,
        "location" : values.location,
        "facility" : values.facility,
        "address" : values.address,
        "training_start" : values.training_start,
        "training_end" : values.training_end,
        "time_start" : values.time_start,
        "time_end" : values.time_end,
        "detail" : values.detail,
        "impressions" : values.impressions,
        "today" : today,
        "day" : day,
        "name" : name,
      });
    };
    alert('提出が完了しました。\n内定関係画面へ');
    history.push('/home/select/report');
  };

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <p>企業名</p>
          <Typography className={classes.check1} >{check1}</Typography>
          <TextField
            className={classes.size}
            name='company'
            label="例）株式会社○○" 
            variant="outlined"
            value={values.company}
            onChange={handleChange('company')}
          />

        <br/>
        <p>研修場所</p>
          <Typography className={classes.check1} >{check2}</Typography>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl>
              <RadioGroup row　aria-label="gender" name="gender1" value={values.location} onChange={handleChange('location')}>
                <FormControlLabel value="本社" control={<Radio />} label="本社" />
                <FormControlLabel value="支社" control={<Radio />} label="支社" />
                <FormControlLabel value="別会場" control={<Radio/>} label="別会場" />
              </RadioGroup>
            </FormControl>
          </Paper>

        <p></p>
          <Typography className={classes.check1} >{check3}</Typography>
          <TextField
            className={classes.size}
            name='facility'
            label="研修施設名を入力" 
            variant="outlined"
            value={values.facility}
            onChange={handleChange('facility')}
          />

        <br/><br/>
          <Typography className={classes.check1} >{check4}</Typography>
          <TextField
            className={classes.size}
            name='address'
            label="住所を入力" 
            variant="outlined"
            value={values.address}
            onChange={handleChange('address')}
          />

        <p>研修期間を入力</p>
          <Typography className={classes.check1} >{check5}</Typography>
          <TextField
            className={classes.size1}
            name='training_start'
            type="date"
            value={values.training_start}
            onChange={handleChange('training_start')}
          />
          ～
          <TextField
            className={classes.size1}
            name='training_end'
            type="date"
            value={values.training_end}
            onChange={handleChange('training_end')}
          />

        <p>実施時刻を入力</p>
          <Typography className={classes.check1} >{check6}</Typography>
          <TextField
            className={classes.size1}
            name='time_start'
            type="time"
            value={values.time_start}
            onChange={handleChange('time_start')}
          />
          ～
          <TextField
            className={classes.size1}
            name='time_end'
            type="time"
            value={values.time_end}
            onChange={handleChange('time_end')}
          />

        <p>研修内容</p>
          <Typography className={classes.check1} >{check7}</Typography>
          <TextField
            className={classes.size}
            name='detail'
            label="内容について入力" 
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.detail}
            onChange={handleChange('detail')}
          />

        <p>感想</p>
          <Typography className={classes.check1} >{check8}</Typography>
          <TextField
            className={classes.size}
            name='impressions'
            label="感想を入力" 
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.impressions}
            onChange={handleChange('impressions')}
          />

        <br/><br/>
        <Button 
          className={classes.Rbutton}
          variant="contained"
          onClick={handleClickOpen}>
          提出
        </Button>

        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"提出しますか？"}</DialogTitle>
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
    </div>
  );
};

export default TrainingComponent;