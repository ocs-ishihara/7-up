import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { initialOneData } from "../../../slices/history";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import { InputLabel, InputBase } from '@material-ui/core';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';


import {firebaseDb} from '../../../plugins/firebase';
const ref = firebaseDb.ref('report/assessment');
let keyIn = 0;
let data = {};

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #cccccc',
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    width:220,
    padding: '15px 18px',
    textAlign: 'left',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root:{
    textAlign: 'center',
    fontSize: 18,
  },
  root1:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  check1:{
    color: '#ff0000'
  },
  Rbutton: {
    width: 100,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#5cca13',
    margin:20 ,
      '&:hover' :{
        background: '#4eaa10',
      },
    }, 
  size: {
    width: 270,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AssessmentComponent = () => {
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
    data2.company = ""; data2.occupation = "";
    data2.activity = "";  data2.failure_day = "";
    data2.item = ""; data2.assessment = "";
    data2.remedy = "";
    data = data2;
    setFlag(false);
  };
  if(oneData !== null) {
    keyIn = 1;
    data = oneData;
    dispatch(initialOneData());
  };
  const [values, setValues] = React.useState({
    company: data.company, occupation: data.occupation,
    activity: data.activity, failure_day: data.failure_day,
    item: data.item, assessment: data.assessment,
    remedy: data.remedy,
  });
  const [open, setOpen] = React.useState(false);

  const [check1, setCheck1] = React.useState("");
  const [check2, setCheck2] = React.useState("");
  const [check3, setCheck3] = React.useState("");
  const [check4, setCheck4] = React.useState("");
  const [check5, setCheck5] = React.useState("");
  const [check6, setCheck6] = React.useState("");
  const [check7, setCheck7] = React.useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

    if(event.target.value.length > 0){
      if(prop === 'company'){
        setCheck1("");
      }
      if(prop === 'occupation'){
        setCheck2("");
      }
      if(prop === 'activity'){
        setCheck3("");
      }
      if(prop === 'failure_day'){
        setCheck4("");
      }
      if(prop === 'item'){
        setCheck5("");
      }
      if(prop === 'assessment'){
        setCheck6("");
      }
      if(prop === 'remedy'){
        setCheck7("");
      }
    }
  };

  const handleClickOpen = () => {
    let cnt = 0;

    if(values.company === "") {
      setCheck1("※企業名が入力されていません");
      cnt += 1;
    }
    if(values.occupation === "") {
      setCheck2("※希望職種が入力されていません");
      cnt += 1;
    }
    if(values.activity === "") {
      setCheck3("※活動方法が選択されていません");
      cnt += 1;
    }
    if(values.failure_day === "") {
      setCheck4("※不合格通知日が選択されていません");
      cnt += 1;
    }
    if(values.item === "") {
      setCheck5("※項目が選択されていません");
      cnt += 1;
    }
    if(values.assessment === "") {
      setCheck6("※自己評価度が選択されていません");
      cnt += 1;
    }
    if(values.remedy === "") {
      setCheck7("※改善策が入力されていません");
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
        "occupation" : values.occupation,
        "activity": values.activity,
        "failure_day" : values.failure_day,
        "item" : values.item,
        "assessment" : values.assessment,
        "remedy" : values.remedy,
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
        "occupation" : values.occupation,
        "activity": values.activity,
        "failure_day" : values.failure_day,
        "item" : values.item,
        "assessment" : values.assessment,
        "remedy" : values.remedy,
        "today" : today,
        "day" : day,
        "name" : name,
      });
    }

    alert('提出が完了しました。\n各種書類提出画面へ');
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
        
        <p>希望職種</p>
          <Typography className={classes.check1} >{check2}</Typography>
          <TextField
            className={classes.size}
            name='occupation'
            label="例）システムエンジニア" 
            variant="outlined"
            value={values.occupation}
            onChange={handleChange('occupation')}
          />

        <p>活動方法</p>
          <Typography className={classes.check1} >{check3}</Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="select">活動方法</InputLabel>
            <NativeSelect
            value={values.activity}
            open={open}
            onChange={handleChange('activity')}
            input={<BootstrapInput />}
            >
              <option value="" aria-label="None"></option>
              <option value="学校斡旋">学校斡旋</option>
              <option value="自由応募">自由応募</option>
              <option value="縁故">縁故</option>
              <option value="その他">その他</option>
            </NativeSelect>
          </FormControl>

        <p>不合格通知日</p>
          <Typography className={classes.check1} >{check4}</Typography>
          <TextField
            className={classes.size}
            name='failure_day'
            type="date"
            variant="outlined"
            value={values.failure_day}
            onChange={handleChange('failure_day')}
          />
        
        <p>不採用項目</p>
          <Typography className={classes.check1} >{check5}</Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="select">不採用項目</InputLabel>
              <NativeSelect
                value={values.item}
                onChange={handleChange('item')}
                input={<BootstrapInput />}
              >
                <option value="" aria-label="None"></option>
                <option value="履歴書">履歴書</option>
                <option value="筆記・適正">筆記・適正</option>
                <option value="面接">面接</option>
                <option value="立居振舞">立居振舞</option>
                <option value="その他">その他</option>
            </NativeSelect>
          </FormControl>

        <p>自己評価度</p>
          <Typography className={classes.check1} >{check6}</Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="select">自己評価度</InputLabel>
              <NativeSelect
                value={values.assessment}
                onChange={handleChange('assessment')}
                input={<BootstrapInput />}
              >
                <option value="" aria-label="None"></option>
                <option value="できた">できた</option>
                <option value="まあまあ">まあまあ</option>
                <option value="できなかった">できなかった</option>
            </NativeSelect>
          </FormControl>

        <p>改善策</p>
          <Typography className={classes.check1} >{check7}</Typography>
          <TextField
            className={classes.size}
            name='remedy'
            label="改善策を入力" 
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.remedy}
            onChange={handleChange('remedy')}
          />
          
        <br/><br/>
        <Button 
          className={classes.Rbutton}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
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

export default AssessmentComponent;
