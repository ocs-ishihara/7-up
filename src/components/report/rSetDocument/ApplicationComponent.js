import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { initialOneData } from "../../../slices/history";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { NativeSelect } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import { InputLabel, InputBase } from '@material-ui/core';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';

import {firebaseDb} from '../../../plugins/firebase';

let num1 = 1;
let num2 = 1;
let keyIn = 0;
let data = {}, check ={};

const BootstrapInput2 = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    padding: '15px 18px',
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
  test :{
    marginLeft:50,
  },
  test1 :{
    marginRight:10,
  },

  haikei :{
    margin: 'auto',
    //textAlign:'center',
    width: 350,
    height: 170,
  },
  haikei1 :{
    margin: 'auto',
    textAlign:'right',
    width: 350,
    height: 130,
  },
  size: {
    width: 320,
    backgroundColor: theme.palette.background.paper,
  },
  size1 :{
    width: 155,
  },
}));

const ApplicationComponent = () => {
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
    data2.company = ""; data2.address = "";
    data2.practice_start = "";  data2.practice_end = "";
    data2.activity = "";  data2.contents = "";
    data2.submissions = ""; data2.deadline = "";
    data = data2;

    let check2 = {};
    check2.checkedA = false;  check2.checkedB = false;
    check2.checkedC = false;  check2.checkedD = false;
    check2.checkedE = false;  check2.checkedF = false;
    check2.checkedG = false;  check2.checkedH = false;

    check2.checkedA2 = false; check2.checkedB2 = false;
    check2.checkedC2 = false; check2.checkedD2 = false;
    check2.checkedE2 = false; check2.checkedF2 = false;
    check = check2;
    setFlag(false);
  };
  if(oneData !== null) {
    keyIn = 1;
    data = oneData;
    if(data.contents !== '') {
      num1 = data.contents;
      if(data.contents % 2 === 0) check.checkedA = true;
      if(data.contents % 3 === 0) check.checkedB = true;
      if(data.contents % 5 === 0) check.checkedC = true;
      if(data.contents % 7 === 0) check.checkedD = true;
      if(data.contents % 11 === 0) check.checkedE = true;
      if(data.contents % 13 === 0) check.checkedF = true;
      if(data.contents % 17 === 0) check.checkedG = true;
      if(data.contents % 19 === 0) check.checkedH = true;
    };
    if(data.submissions !== '') {
      num2 = data.submissions;
      if(data.submissions % 2 === 0) check.checkedA2 = true;
      if(data.submissions % 3 === 0) check.checkedB2 = true;
      if(data.submissions % 5 === 0) check.checkedC2 = true;
      if(data.submissions % 7 === 0) check.checkedD2 = true;
      if(data.submissions % 11 === 0) check.checkedE2 = true;
      if(data.submissions % 13 === 0) check.checkedF2 = true;
    };
    dispatch(initialOneData());
  };
  const [values, setValues] = React.useState({
    company: data.company, address: data.address,
    practice_start: data.practice_start, practice_end: data.practice_end,
    activity: data.activity, contents: data.contents,
    submissions: data.submissions, deadline: data.deadline,
  });
  const [states, setState] = React.useState({
    checkedA: check.checkedA, checkedB: check.checkedB,
    checkedC: check.checkedC, checkedD: check.checkedD,
    checkedE: check.checkedE, checkedF: check.checkedF,
    checkedG: check.checkedG, checkedH: check.checkedH,
    checkedA2: check.checkedA2, checkedB2: check.checkedB2,
    checkedC2: check.checkedC2, checkedD2: check.checkedD2,
    checkedE2: check.checkedE2, checkedF2: check.checkedF2,
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
      if(prop === 'address'){
        setCheck2("");
      }
      if(prop === 'practice_start'){
        setCheck3("");
      }
      if(prop === 'practice_end'){
        setCheck3("");
      }
      if(prop === 'activity'){
        setCheck4("");
      }
      if(prop === 'deadline'){
        setCheck7("");
      }
    }
  };
  const handleChangeChecked = (event) => {
    setState({ ...states, [event.target.name]: event.target.checked });
    if(event.target.name === 'checkedA' || event.target.name === 'checkedB' ||
       event.target.name === 'checkedC' || event.target.name === 'checkedD' ||
       event.target.name === 'checkedE' || event.target.name === 'checkedF' ||
       event.target.name === 'checkedG' || event.target.name === 'checkedH' ){
      setCheck5("");
    }
    if(event.target.name === 'checkedA2' || event.target.name === 'checkedB2' ||
       event.target.name === 'checkedC2' || event.target.name === 'checkedD2' ||
       event.target.name === 'checkedE2' || event.target.name === 'checkedF2' ){
      setCheck6("");
    }
  };

  const handleChange_check1 = (event) => {
    if(num1 % event.target.value === 0){
      num1 = num1 / event.target.value;
    } else {
      num1 = num1 * event.target.value;
    }
    setValues({ ...values, contents: num1 });
  };
  const handleChange_check2 = (event) => {
    if(num2 % event.target.value === 0){
      num2 = num2 / event.target.value;
    } else {
      num2 = num2 * event.target.value;
    }
    setValues({ ...values, submissions: num2 });
  };
  
  const handleClickOpen = () => {
    let cnt = 0;

    if(values.company === "") {
      setCheck1("※企業名が入力されていません");
      cnt += 1;
    }
    if(values.address === "") {
      setCheck2("※住所が入力されていません");
      cnt += 1;
    }
    if(values.practice_start === "" || values.practice_end === "") {
      setCheck3("※開催期間が選択されていません");
      cnt += 1;
    }
    if(values.activity === "") {
      setCheck4("※活動方法が選択されていません");
      cnt += 1;
    }
    if(values.contents === "" || values.contents === 1) {
      setCheck5("※実施内容が選択されていません");
      cnt += 1;
    }
    /*
    if(values.submissions === "") {
      setCheck6("※提出物が選択されていません");
      cnt += 1;
    }

    if(values.deadline === "") {
      setCheck7("※締め切り日が選択されていません");
      cnt += 1;
    }
    */

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
    const usersRef = firebaseDb.ref('report/application/' +userId);
    if(keyIn === 0) {
      usersRef.push({
        "company" : values.company,
        "address" : values.address,
        "practice_start" : values.practice_start,
        "practice_end" : values.practice_end,
        "activity" : values.activity,
        "contents" : values.contents,
        "submissions" : values.submissions,
        "deadline" : values.deadline,
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
        "address" : values.address,
        "practice_start" : values.practice_start,
        "practice_end" : values.practice_end,
        "activity" : values.activity,
        "contents" : values.contents,
        "submissions" : values.submissions,
        "deadline" : values.deadline,
        "today" : today,
        "day" : day,
        "name" : name,
      });
      /*
      const recentRef = firebaseDb.ref('report/application/recent/' +userId);
      recentRef.push({
        "today" : today,
        "day" : day,
        "name" : name,
      });
      */
    };
    num1 = 1;
    num2 = 1;
    alert('提出が完了しました。\n各種書類提出画面へ');
    history.push('/home/select/report');
  };

  return (
    <div className={classes.root}>
      <div className="centerTable" noValidate autoComplete="off">
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

        <p>住所</p>
          <Typography className={classes.check1} >{check2}</Typography>
          <TextField
            className={classes.size}
            label="住所を入力" 
            variant="outlined"
            name='address' 
            value={values.address}
            onChange={handleChange('address')}
          />

        <p>開催期間</p>
          <Typography className={classes.check1} >{check3}</Typography>
          <TextField
            className={classes.size1}
            name='practice_start'
            type="date"
            value={values.practice_start}
            onChange={handleChange('practice_start')}
          />
          ～
          <TextField
            className={classes.size1}
            name='practice_end'
            type="date"
            value={values.practice_end}
            onChange={handleChange('practice_end')}
          />

        <p>活動方法</p>
          <Typography className={classes.check1} >{check4}</Typography>
          <FormControl className={classes.size} variant="outlined">
            <InputLabel htmlFor="select">活動方法</InputLabel>
            <NativeSelect
              value={values.activity}
              open={open}
              onChange={handleChange('activity')}
              input={<BootstrapInput2 />}
            >
                <option value="" aria-label="None"></option>
                <option value="学校斡旋">学校斡旋</option>
                <option value="縁故">自由応募</option>
                <option value="自由応募">縁故</option>
                <option value="その他">その他</option>
            </NativeSelect>
          </FormControl>
        
        <p>実施内容</p>
          <Typography className={classes.check1} >{check5}</Typography>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl className={classes.test}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedA} onChange={handleChangeChecked}
                    name="checkedA" value={2} onClick={handleChange_check1} />}
                  label="会社説明"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedB} onChange={handleChangeChecked}
                    name="checkedB" value={3} onClick={handleChange_check1} />} 
                  label="会社見学" 
                />
                <FormControlLabel 
                  control={<Checkbox 
                    checked={states.checkedC} onChange={handleChangeChecked} 
                    name="checkedC" value={5} onClick={handleChange_check1} />}
                  label="作文" 
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedD} onChange={handleChangeChecked}
                    name="checkedD" value={7} onClick={handleChange_check1} />} 
                  label="筆記試験" 
                />
              </FormGroup>
            </FormControl>
            <FormControl>
              <FormGroup >
                <FormControlLabel 
                  control={<Checkbox 
                    checked={states.checkedE} onChange={handleChangeChecked} 
                    name="checkedE" value={11} onClick={handleChange_check1} />} 
                  label="一次面接"
                />
                <FormControlLabel 
                  control={<Checkbox 
                    checked={states.checkedF} onChange={handleChangeChecked} 
                    name="checkedF" value={13} onClick={handleChange_check1} />} 
                  label="二次面接" 
                />
                <FormControlLabel 
                  control={<Checkbox
                    checked={states.checkedG} onChange={handleChangeChecked} 
                    name="checkedG" value={17} onClick={handleChange_check1} />} 
                  label="最終面接" 
                />
                <FormControlLabel 
                  control={<Checkbox
                    checked={states.checkedH} onChange={handleChangeChecked} 
                    name="checkedH" value={19} onClick={handleChange_check1} />} 
                  label="その他"
                />  
              </FormGroup>
            </FormControl>
          </Paper>
          
        <p>提出物</p>
          <Typography className={classes.check1} >{check6}</Typography>
          <Paper variant="outlined" className={classes.haikei1}>
            <FormControl className={classes.test1}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedA2} onChange={handleChangeChecked}
                    name="checkedA2" value={2}  onClick={handleChange_check2} />}
                  label="履歴書"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedB2} onChange={handleChangeChecked}
                    name="checkedB2" value={3}  onClick={handleChange_check2} />}
                  label="成績証明書"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedC2} onChange={handleChangeChecked} 
                    name="checkedC2" value={5}  onClick={handleChange_check2} />}
                  label="健康診断書"
                />
              </FormGroup>
            </FormControl>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedD2} onChange={handleChangeChecked}
                    name="checkedD2" value={7}  onClick={handleChange_check2} />}
                  label="卒業見込証明書"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={states.checkedE2} onChange={handleChangeChecked} 
                    name="checkedE2" value={11} onClick={handleChange_check2} />}
                  label="エントリーシート"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={states.checkedF2} onChange={handleChangeChecked} 
                    name="checkedF2" value={13} onClick={handleChange_check2} />}
                  label="その他"
                />
              </FormGroup>
            </FormControl>
          </Paper>
        
        <p>応募締め切り日</p>
          <Typography className={classes.check1} >{check7}</Typography>
          <TextField
            className={classes.size}
            name='deadline'
            type="date"
            variant="outlined"
            value={values.deadline}
            onChange={handleChange('deadline')}
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

export default ApplicationComponent;