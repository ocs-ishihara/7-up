import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { initialOneData } from "../../../slices/history";
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { Radio, RadioGroup } from '@material-ui/core';
import { FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';

import {firebaseDb} from '../../../plugins/firebase';
const ref = firebaseDb.ref('report/participation');

let num1 = 1;
let keyIn = 0;
let data = {}, check ={};

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
  haikei :{
    margin: 'auto',
    width: 325,
    height: 90,
  },
  haikei1 :{
    margin: 'auto',
    width: 320,
    height: 45,
  },
  test :{
    marginLeft: 20,
  },
  size: {
    width: 320,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ParticipationComponent = () => {
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
    data2.visit = "";  data2.detail = "";
    data2.question = "";  data2.will = "";
    data2.reason = ""; data2.impressions = "";
    data = data2;

    let check2 = {};
    check2.checkedA = false;  check2.checkedB = false;
    check2.checkedC = false;  check2.checkedD = false;
    check = check2;
    setFlag(false);
  };
  if(oneData !== null) {
    keyIn = 1;
    data = oneData;
    if(data.detail !== '') {
      num1 = data.detail;
      if(data.detail % 2 === 0) check.checkedA = true;
      if(data.detail % 3 === 0) check.checkedB = true;
      if(data.detail % 5 === 0) check.checkedC = true;
      if(data.detail % 7 === 0) check.checkedD = true;
    };
    dispatch(initialOneData());
  };
  const [values, setValues] = React.useState({
    company: data.company, address: data.address,
    visit: data.visit, detail: data.detail,
    question: data.question, will: data.will,
    reason: data.reason, impressions: data.impressions,
  });
  const [states, setState] = React.useState({
    checkedA: check.checkedA, checkedB: check.checkedB,
    checkedC: check.checkedC, checkedD: check.checkedD,
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

  const [loading, setLoading] = React.useState(true);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

    if(event.target.value.length > 0){
      if(prop === 'company'){
        setCheck1("");
      }
      if(prop === 'address'){
        setCheck2("");
      }
      if(prop === 'visit'){
        setCheck3("");
      }
      if(prop === 'question'){
        setCheck5("");
      }
      if(prop === 'will'){
        setCheck6("");
      }
      if(prop === 'reason'){
        setCheck7("");
      }
      if(prop === 'impressions'){
        setCheck8("");
      }
    }

    if(event.target.value === "無し") {
      setCheck6("");
      setLoading(false);
    } else {
      setLoading(true);
    }
  };
  const handleChangeChecked = (event) => {
    setState({ ...states, [event.target.name]: event.target.checked });

    if(event.target.name === 'checkedA' || event.target.name === 'checkedB' ||
       event.target.name === 'checkedC' || event.target.name === 'checkedD' ){
      setCheck4("");
    }
  };

  const handleChange_check1 = (event) => {
    if(num1 % event.target.value === 0){
      num1 = num1 / event.target.value;
    } else {
      num1 = num1 * event.target.value;
    }
    setValues({ ...values, detail: num1 });
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
    if(values.visit === "") {
      setCheck3("※訪問日時が選択されていません");
      cnt += 1;
    }
    
    if(values.detail === "" || values.detail === 1) {
      setCheck4("※活動内容が選択されていません");
      cnt += 1;
    }

    if(values.detail !== "") {
      if(values.detail !== 1){
        if(values.detail % 7 === 0) {
          if(values.question === "") {
            setCheck5("※質問内容が入力されていません");
            cnt += 1;
          }
        } else {
          setCheck5("");
        }
      }
    }
    if(values.will === "") {
      setCheck6("※受験意志が選択されていません");
      cnt += 1;
    }
    
    if(values.will === "無し") {
      if(values.reason === "") {
        setCheck7("※辞退理由を入力してください");
        cnt += 1;
      }
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
        "company": values.company,
        "address": values.address,
        "visit": values.visit,
        "detail": values.detail,
        "question": values.question,
        "will": values.will,
        "reason": values.reason,
        "impressions": values.impressions,
        "today" : today,
        "day" : day,
        "name" : name,
      });
    }
    else {
      keyIn = 0;
      const updateRef = usersRef.child(data.key);
      updateRef.set({
        "company": values.company,
        "address": values.address,
        "visit": values.visit,
        "detail": values.detail,
        "question": values.question,
        "will": values.will,
        "reason": values.reason,
        "impressions": values.impressions,
        "today" : today,
        "day" : day,
        "name" : name,
      });
    };
    num1 = 1;
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

        <p>住所</p>
          <Typography className={classes.check1} >{check2}</Typography>
          <TextField
            className={classes.size}
            name='address'
            label="住所を入力"
            variant="outlined"
            value={values.address}
            onChange={handleChange('address')}
          />

        <p>訪問日時</p>
          <Typography className={classes.check1} >{check3}</Typography>
          <TextField
            className={classes.size}
            name='visit'
            type="date"
            variant="outlined"
            value={values.visit}
            onChange={handleChange('visit')}
          />

        <p>活動内容</p>
          <Typography className={classes.check1} >{check4}</Typography>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedA} onChange={handleChangeChecked}
                    name="checkedA" value={2}  onClick={handleChange_check1} />}
                  label="会社説明"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedB} onChange={handleChangeChecked}
                    name="checkedB" value={3}  onClick={handleChange_check1} />}
                  label="アンケート票記入"
                />
              </FormGroup>
            </FormControl>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedC} onChange={handleChangeChecked}
                    name="checkedC" value={5}  onClick={handleChange_check1} />}
                  label="社内見学"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedD} onChange={handleChangeChecked}
                    name="checkedD" value={7}  onClick={handleChange_check1} />}
                  label="質疑応答"
                />
              </FormGroup>
            </FormControl>
          </Paper>

        <p>質問内容と企業の返答</p>
          <Typography className={classes.check1} >{check5}</Typography>
          <TextField
            className={classes.size}
            name='question'
            label="内容を入力"
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.question}
            onChange={handleChange('question')}
          />
        
        <p>受験意志</p>
          <Typography className={classes.check1} >{check6}</Typography>
          <Paper variant="outlined" className={classes.haikei1}>
            <FormControl>
              <RadioGroup row aria-label="gender" name="gender1" value={values.will} onChange={handleChange('will')}>
                <FormControlLabel value="有り" control={<Radio />} label="有り" />
                <FormControlLabel value="無し" control={<Radio />} label="無し" />
              </RadioGroup>
            </FormControl>
          </Paper>

        <br/><br/>

          <Typography className={classes.check1} >{check7}</Typography>
          <TextField
            className={classes.size}
            name='reason'
            label="無しの場合、辞退理由"
            variant="outlined"
            disabled={loading}
            multiline
            rowsMax={4}
            value={values.reason}
            onChange={handleChange('reason')}
          />
        
        <p>訪問後の感想と後輩への助言</p>
          <Typography className={classes.check1} >{check8}</Typography>
          <TextField
            className={classes.size}
            name='impressions'
            label="内容を入力"
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
          color="primary"
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

export default ParticipationComponent;
