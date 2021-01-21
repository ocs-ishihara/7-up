import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { initialOneData } from "../../../slices/history";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import { InputLabel, InputAdornment, InputBase } from '@material-ui/core';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';

import {firebaseDb} from '../../../plugins/firebase';
const ref = firebaseDb.ref('report/examination');

let num1 = 1;
let num2 = 1;
let num3 = 1;
let num4 = 1;
let keyIn = 0;
let data = {}, check ={};

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #666666',
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
  test :{
    marginRight:50,
  },
  haikei :{
    margin: 'auto',
    width: 300,
    height: 80,
  },
  haikei1 :{
    margin: 'auto',
    textAlign:'center',
    width: 300,
    height: 125,
  },
  haikei2 :{
    margin: 'auto',
    textAlign:'center',
    width: 300,
    height: 90,
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
    width: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ExaminationComponent = () => {
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
    data2.contents = "";  data2.examination_day = "";
    data2.result_day = "";  data2.written = "";
    data2.written_time = ""; data2.subject = "";
    data2.other = ""; data2.other_time = "";
    data2.other_test = ""; data2.theme = "";
    data2.composition_time = ""; data2.word = "";
    data2.completeness = ""; data2.company_people = "";
    data2.examination_people = ""; data2.interview_form = "";
    data2.interview_time = ""; data2.question = "";
    data2.reflections = ""; data2.impressions = "";
    data2.select = "";
    data = data2;

    let check2 = {};
    check2.checkedA = false;  check2.checkedB = false;
    check2.checkedC = false;  check2.checkedD = false;

    check2.checkedA2 = false; check2.checkedB2 = false;
    check2.checkedC2 = false; check2.checkedD2 = false;
    check2.checkedE2 = false; check2.checkedF2 = false;

    check2.checkedA3 = false;  check2.checkedB3 = false;
    check2.checkedC3 = false;  check2.checkedD3 = false;

    check2.checkedA4 = false;  check2.checkedB4 = false;
    check2.checkedC4 = false;  check2.checkedD4 = false;

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
    };
    if(data.written !== '') {
      num2 = data.written;
      if(data.written % 2 === 0) check.checkedA2 = true;
      if(data.written % 3 === 0) check.checkedB2 = true;
      if(data.written % 5 === 0) check.checkedC2 = true;
      if(data.written % 7 === 0) check.checkedD2 = true;
      if(data.written % 11 === 0) check.checkedE2 = true;
      if(data.written % 13 === 0) check.checkedF2 = true;
    };
    if(data.subject !== '') {
      num3 = data.subject;
      if(data.subject % 2 === 0) check.checkedA3 = true;
      if(data.subject % 3 === 0) check.checkedB3 = true;
      if(data.subject % 5 === 0) check.checkedC3 = true;
      if(data.subject % 7 === 0) check.checkedD3 = true;
    };
    if(data.select !== '') {
      console.log(data.select);
      num4 = data.subject;
      console.log(num4);
      if(data.select % 2 === 0) check.checkedA4 = true;
      if(data.select % 3 === 0) check.checkedB4 = true;
      if(data.select % 5 === 0) check.checkedC4 = true;
      if(data.select % 7 === 0) check.checkedD4 = true;
    };
    dispatch(initialOneData());
  };
  const [values, setValues] = React.useState({
    company: data.company, address: data.address,
    contents: data.contents, examination_day: data.examination_day,
    result_day: data.result_day, written: data.written,
    written_time: data.written_time, subject: data.subject,
    other: data.other, other_time: data.other_time,
    other_test: data.other_test, theme: data.theme,
    composition_time: data.composition_time, word: data.word,
    completeness: data.completeness, company_people: data.company_people,
    examination_people: data.examination_people, interview_form: data.interview_form,
    interview_time: data.interview_time, question: data.question,
    reflections: data.reflections, impressions: data.impressions,
    select: data.select,
  });
  const [states, setState] = React.useState({
    checkedA: check.checkedA, checkedB: check.checkedB,
    checkedC: check.checkedC, checkedD: check.checkedD,
    checkedA2: check.checkedA2, checkedB2: check.checkedB2,
    checkedC2: check.checkedC2, checkedD2: check.checkedD2,
    checkedE2: check.checkedE2, checkedF2: check.checkedF2,
    checkedA3: check.checkedA3, checkedB3: check.checkedB3,
    checkedC3: check.checkedC3, checkedD3: check.checkedD3,
    checkedA4: check.checkedA4, checkedB4: check.checkedB4,
    checkedC4: check.checkedC4, checkedD4: check.checkedD4,
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
  const [check9, setCheck9] = React.useState("");
  const [check10, setCheck10] = React.useState("");
  const [check11, setCheck11] = React.useState("");
  const [check12, setCheck12] = React.useState("");
  const [check13, setCheck13] = React.useState("");
  const [check14, setCheck14] = React.useState("");
  const [check15, setCheck15] = React.useState("");
  const [check16, setCheck16] = React.useState("");
  const [check17, setCheck17] = React.useState("");
  const [check18, setCheck18] = React.useState("");
  const [check19, setCheck19] = React.useState("");
  const [check20, setCheck20] = React.useState("");
  const [check21, setCheck21] = React.useState("");
  const [check22, setCheck22] = React.useState("");

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
      if(prop === 'examination_day'){
        setCheck4("");
      }
      if(prop === 'result_day'){
        setCheck5("");
      }
      if(prop === 'written_time'){
        setCheck7("");
      }
      if(prop === 'other'){
        setCheck9("");
      }
      if(prop === 'other_time'){
        setCheck10("");
      }
      if(prop === 'other_test'){
        setCheck11("");
      }
      if(prop === 'theme'){
        setCheck12("");
      }
      if(prop === 'composition_time'){
        setCheck13("");
      }
      if(prop === 'word'){
        setCheck14("");
      }
      if(prop === 'completeness'){
        setCheck15("");
      }
      if(prop === 'company_people'){
        setCheck16("");
      }
      if(prop === 'examination_people'){
        setCheck17("");
      }
      if(prop === 'interview_form'){
        setCheck18("");
      }
      if(prop === 'interview_time'){
        setCheck19("");
      }
      if(prop === 'question'){
        setCheck20("");
      }
      if(prop === 'reflections'){
        setCheck21("");
      }
      if(prop === 'impressions'){
        setCheck22("");
      }
    }
  };

  const handleChangeChecked = (event) => {
    setState({ ...states, [event.target.name]: event.target.checked });

    if(event.target.name === 'checkedA' || event.target.name === 'checkedB' ||
       event.target.name === 'checkedC' || event.target.name === 'checkedD' ){
      setCheck3("");
    }
    if(event.target.name === 'checkedA2' || event.target.name === 'checkedB2' ||
       event.target.name === 'checkedC2' || event.target.name === 'checkedD2' ||
       event.target.name === 'checkedE2' || event.target.name === 'checkedF2' ){
      setCheck6("");
    }
    if(event.target.name === 'checkedA3' || event.target.name === 'checkedB3' ||
       event.target.name === 'checkedC3' || event.target.name === 'checkedD3' ){
      setCheck8("");
    }
    if(event.target.name === 'checkedD3') {
      setLoading(false);
      setCheck9("");
    } else {
      setLoading(true);
    }

    if(event.target.name === 'checkedA4') {
      formatText1('checkedA4');
    }
    if(event.target.name === 'checkedB4') {
      formatText2('checkedB4');
    }
    if(event.target.name === 'checkedC4') {
      formatText3('checkedC4');
    }
    if(event.target.name === 'checkedD4') {
      formatText4('checkedD4');
    }
  }

  const formatText1 = () => {
    if(states.checkedA4 === true) {
      return(
        <div>
          <p>筆記試験</p>
            <Typography className={classes.check1} >{check6}</Typography>
            <Paper variant="outlined" className={classes.haikei1}>
              <FormControl>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox
                      checked={states.checkedA2} onChange={handleChangeChecked}
                      name="checkedA2" value={2}  onClick={handleChange_check2} />}
                    label="一般常識"
                  />
                  <FormControlLabel
                    control={<Checkbox
                      checked={states.checkedB2} onChange={handleChangeChecked}
                      name="checkedB2" value={3}  onClick={handleChange_check2} />}
                    label="言語"
                  />
                  <FormControlLabel
                    control={<Checkbox
                      checked={states.checkedC2} onChange={handleChangeChecked}
                      name="checkedC2" value={5}  onClick={handleChange_check2} />}
                    label="非言語"
                  />
                </FormGroup>
              </FormControl>
              <FormControl  >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox
                      checked={states.checkedD2} onChange={handleChangeChecked}
                      name="checkedD2" value={7}  onClick={handleChange_check2} />}
                    label="時事"
                  />
                  <FormControlLabel
                    control={<Checkbox
                      checked={states.checkedE2} onChange={handleChangeChecked}
                      name="checkedE2" value={11} onClick={handleChange_check2} />}
                    label="性格診断"
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

          <p>試験時間</p>
            <Typography className={classes.check1} >{check7}</Typography>
            <TextField
              className={classes.size}
              name='written_time'
              type="number"
              label="試験時間を入力"
              variant="outlined"
              value={values.written_time}
              onChange={handleChange('written_time')}
              InputProps={{
                endAdornment: <InputAdornment position="end">分</InputAdornment>,
              }}
            />
        </div>
      );
    }
  };
  const formatText2 = () => {
    if(states.checkedB4 === true) {
      return(
        <div>
          <p>実技科目</p>
          <Typography className={classes.check1} >{check8}</Typography>
          <Paper variant="outlined" className={classes.haikei2}>
            <FormControl  className={classes.test1}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedA3} onChange={handleChangeChecked}
                    name="checkedA3" value={2}  onClick={handleChange_check3} />}
                  label="情報基礎"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedB3} onChange={handleChangeChecked}
                    name="checkedB3" value={3}  onClick={handleChange_check3} />}
                  label="アルゴリズム"
                />
              </FormGroup> 
            </FormControl> 
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedC3} onChange={handleChangeChecked}
                    name="checkedC3" value={5}  onClick={handleChange_check3} />} 
                  label="コーディング"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedD3} onChange={handleChangeChecked}
                    name="checkedD3" value={7}  onClick={handleChange_check3} />}
                  label="その他"
                />
              </FormGroup> 
            </FormControl>
          </Paper>

        <p>その他の場合</p>
          <Typography className={classes.check1} >{check9}</Typography>
          <TextField
            className={classes.size}
            name='other'
            label="実施した試験を入力"
            variant="outlined"
            disabled={loading}
            value={values.other}
            onChange={handleChange('other')}
          />
        
        <p>試験時間</p>
          <Typography className={classes.check1} >{check10}</Typography>
          <TextField
            className={classes.size}
            name='other_time'
            type="number"
            label="試験時間を入力"
            variant="outlined"
            value={values.other_time}
            onChange={handleChange('other_time')}
            InputProps={{
              endAdornment: <InputAdornment position="end">分</InputAdornment>,
            }}
          />

        <p>試験内容</p>
          <Typography className={classes.check1} >{check11}</Typography>
          <TextField
            className={classes.size}
            name='other_test'
            label="試験の詳細を入力"
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.other_test}
            onChange={handleChange('other_test')}
          />

        <br/><br/>
          
        </div>
      );
    }
  };
  const formatText3 = () => {
    if(states.checkedC4 === true) {
      return(
        <div>
          <p className={classes.root1}>作文</p>
        <p>テーマ名</p>
          <Typography className={classes.check1} >{check12}</Typography>
          <TextField
            className={classes.size}
            name='theme'
            label="テーマ名を入力"
            variant="outlined"
            value={values.theme}
            onChange={handleChange('theme')}
          />

        <p>時間</p>
          <Typography className={classes.check1} >{check13}</Typography>
          <TextField
            className={classes.size}
            name='composition_time'
            label="時間を入力"
            type="number"
            variant="outlined"
            value={values.composition_time}
            onChange={handleChange('composition_time')}
            InputProps={{
              endAdornment: <InputAdornment position="end">分</InputAdornment>,
            }}
          />
        
        <p>文字数</p>
          <Typography className={classes.check1} >{check14}</Typography>
          <TextField
            className={classes.size}
            name='word'
            type="number"
            label="文字数を入力"
            variant="outlined"
            value={values.word}
            onChange={handleChange('word')}
            InputProps={{
              endAdornment: <InputAdornment position="end">字</InputAdornment>,
            }}
          />

        <p>完成度</p>
          <Typography className={classes.check1} >{check15}</Typography>
          <TextField
            className={classes.size}
            name='completeness'
            type="number"
            label="完成度を入力"
            variant="outlined"
            value={values.completeness}
            onChange={handleChange('completeness')}
            InputProps={{
              endAdornment: <InputAdornment position="end">％</InputAdornment>,
            }}
          />

        <br/><br/>
          
        </div>
      );
    }
  };
  const formatText4 = () => {
    if(states.checkedD4 === true) {
      return(
        <div>
          <p className={classes.root1}>面接内容</p>
        <p>企業側</p>
          <Typography className={classes.check1} >{check16}</Typography>
          <TextField
            className={classes.size}
            name='company_people'
            type="number"
            label="人数を入力"
            variant="outlined"
            value={values.company_people}
            onChange={handleChange('company_people')}
            InputProps={{
              endAdornment: <InputAdornment position="end">人</InputAdornment>,
            }}
          />
        
        <p>受験者</p>
          <Typography className={classes.check1} >{check17}</Typography>
          <TextField
            className={classes.size}
            name='examination_people'
            type="number"
            label="自分を含めた人数"
            variant="outlined"
            value={values.examination_people}
            onChange={handleChange('examination_people')}
            InputProps={{
              endAdornment: <InputAdornment position="end">人</InputAdornment>,
            }}
          />

        <p>面接形態</p>
          <Typography className={classes.check1} >{check18}</Typography>
          <FormControl className={classes.size} variant="outlined">
            <InputLabel htmlFor="select">面接形態</InputLabel>
            <NativeSelect
              value={values.interview_form}
              open={open}
              onChange={handleChange('interview_form')}
              input={<BootstrapInput />}
            >
              <option value="" aria-label="None"></option>
              <option value="個人面接">個人面接</option>
              <option value="集団面接">集団面接</option>
              <option value="グループ討議">グループ討議</option>
              <option value="その他">その他</option>
            </NativeSelect>
          </FormControl>

        <p>面接時間</p>
          <Typography className={classes.check1} >{check19}</Typography>
          <TextField
            className={classes.size}
            name='interview_time'
            type="number"
            label="時間を入力"
            variant="outlined"
            value={values.interview_time}
            onChange={handleChange('interview_time')}
            InputProps={{
              endAdornment: <InputAdornment position="end">分</InputAdornment>,
            }}
          />
        
        <p>企業側の質問内容</p>
          <Typography className={classes.check1} >{check20}</Typography>
          <TextField
            className={classes.size}
            name='question'
            label="箇条書きで入力"
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.question}
            onChange={handleChange('question')}
          />
          
        </div>
      );
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
    setValues({ ...values, written: num2 });
  };
  const handleChange_check3 = (event) => {
    if(num3 % event.target.value === 0){
      num3 = num3 / event.target.value;
    } else {
      num3 = num3 * event.target.value;
    }
    setValues({ ...values, subject: num3 });
  };
  const handleChange_check4 = (event) => {
    if(num4 % event.target.value === 0){
      num4 = num4 / event.target.value;
    } else {
      num4 = num4 * event.target.value;
    }
    setValues({ ...values, select: num4 });
  };

  const handleClickOpen = () => {
    let cnt = 0;

    if(values.company === "") {
      setCheck1("※企業名が入力されていません");
      cnt += 1;
    };
    if(values.address === "") {
      setCheck2("※住所が入力されていません");
      cnt += 1;
    };
    if(values.contents === "") {
      setCheck3("※実施試験が選択されていません");
      cnt += 1;
    };
    if(values.examination_day === "") {
      setCheck4("※受験日が選択されていません");
      cnt += 1;
    };
    /*
    if(values.result_day === "") {
      setCheck5("※結果通知日が選択されていません");
      cnt += 1;
    };
    */

    // 筆記試験
    if(states.checkedA4) {
      if(values.written === "" || values.written === 1) {
        setCheck6("※筆記試験が選択されていません");
        cnt += 1;
      };
      if(values.written_time === "" || values.written_time === 1) {
        setCheck7("※試験時間が入力されていません");
        cnt += 1;
      };
    };

    // 実技科目
    if(states.checkedB4) {
      if(values.subject === "" || values.subject === 1) {
        setCheck8("※実技科目が選択されていません");
        cnt += 1;
      };
      if(values.other_time === "") {
        setCheck10("※試験時間が入力されていません");
        cnt += 1;
      };
      if(values.other_test === "") {
        setCheck11("※試験内容が入力されていません");
        cnt += 1;
      };
      if(values.subject !== "") {
        if(values.subject !== 1){
          if(values.subject % 7 === 0) {
            if(values.other === "") {
              setCheck9("※実施試験が入力されていません");
              cnt += 1;
            };
          } else {
            setCheck9("");
          };
        };
      };
    };

    // 作文
    if(states.checkedC4) {
      if(values.theme === "") {
        setCheck12("※テーマ名が入力されていません");
        cnt += 1;
      };
      if(values.composition_time === "") {
        setCheck13("※時間が入力されていません");
        cnt += 1;
      };
      /*
      if(values.word === "") {
        setCheck14("※文字数が入力されていません");
        cnt += 1;
      };
      if(values.completeness === "") {
        setCheck15("※完成度が入力されていません");
        cnt += 1;
      };
      */
    };

    // 面接内容
    if(states.checkedD4) {
      if(values.company_people === "") {
        setCheck16("※人数が入力されていません");
        cnt += 1;
      };
      if(values.examination_people === "") {
        setCheck17("※受験者数が入力されていません");
        cnt += 1;
      };
      if(values.interview_form === "") {
        setCheck18("※面接形態が選択されていません");
        cnt += 1;
      };
      if(values.interview_time === "") {
        setCheck19("※面接時間が入力されていません");
        cnt += 1;
      };
      if(values.question === "") {
        setCheck20("※質問内容が入力されていません");
        cnt += 1;
      };
    };

    if(values.reflections === "") {
      setCheck21("※反省点が入力されていません");
      cnt += 1;
    };
    if(values.impressions === "") {
      setCheck22("※感想が入力されていません");
      cnt += 1;
    };
    if(cnt === 0) {
      setOpen(true);
    };
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
        "contents" : values.contents,
        "examination_day": values.examination_day,
        "result_day": values.result_day,
        "written" : values.written,
        "written_time": values.written_time,
        "subject" : values.subject,
        "other": values.other,
        "other_time": values.other_time,
        "other_test": values.other_test,
        "theme": values.theme,
        "composition_time": values.composition_time,
        "word": values.word,
        "completeness": values.completeness,
        "company_people": values.company_people,
        "examination_people": values.examination_people,
        "interview_form": values.interview_form,
        "interview_time": values.interview_time,
        "question": values.question,
        "reflections": values.reflections,
        "impressions": values.impressions,
        "select": values.select,
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
        "contents" : values.contents,
        "examination_day": values.examination_day,
        "result_day": values.result_day,
        "written" : values.written,
        "written_time": values.written_time,
        "subject" : values.subject,
        "other": values.other,
        "other_time": values.other_time,
        "other_test": values.other_test,
        "theme": values.theme,
        "composition_time": values.composition_time,
        "word": values.word,
        "completeness": values.completeness,
        "company_people": values.company_people,
        "examination_people": values.examination_people,
        "interview_form": values.interview_form,
        "interview_time": values.interview_time,
        "question": values.question,
        "reflections": values.reflections,
        "impressions": values.impressions,
        "select": values.select,
        "today" : today,
        "day" : day,
        "name" : name,
      });
    };
    num1 = 1;
    num2 = 1;
    num3 = 1;
    num4 = 1;
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

        <p>実施試験</p>
        <Typography className={classes.check1} >{check3}</Typography>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl className={classes.test}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedA} onChange={handleChangeChecked}
                    name="checkedA" value={2}  onClick={handleChange_check1} />}
                  label="一次試験"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedB} onChange={handleChangeChecked}
                    name="checkedB" value={3}  onClick={handleChange_check1} />}
                  label="二次試験"
                />
              </FormGroup>
            </FormControl>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedC} onChange={handleChangeChecked}
                    name="checkedC" value={5}  onClick={handleChange_check1} />}
                  label="三次試験"
                />
                <FormControlLabel
                  control={<Checkbox
                    checked={states.checkedD} onChange={handleChangeChecked}
                    name="checkedD" value={7}  onClick={handleChange_check1} />}
                  label="その他"
                />
              </FormGroup>
            </FormControl>
          </Paper>

        <p>受験日</p>
          <Typography className={classes.check1} >{check4}</Typography>
          <TextField
            className={classes.size}
            name='examination_day'
            type="date"
            variant="outlined"
            value={values.examination_day}
            onChange={handleChange('examination_day')}
          />
        
        <p>結果通知日</p>
          <Typography className={classes.check1} >{check5}</Typography>
          <TextField
            className={classes.size}
            name='result_day'
            type="date"
            variant="outlined"
            value={values.result_day}
            onChange={handleChange('result_day')}
          />
        <br/><br/>

        <p className={classes.root1}>試験内容</p>
        <Paper variant="outlined" className={classes.haikei}>
          <FormControl className={classes.test}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox
                  checked={states.checkedA4} onChange={handleChangeChecked}
                  name="checkedA4" value={2} onClick={handleChange_check4} />}
                label="筆記試験"
              />
              <FormControlLabel
                control={<Checkbox
                  checked={states.checkedB4} onChange={handleChangeChecked}
                  name="checkedB4" value={3} onClick={handleChange_check4} />}
                label="実技科目"
              />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox
                  checked={states.checkedC4} onChange={handleChangeChecked}
                  name="checkedC4" value={5} onClick={handleChange_check4} />}
                label="作文"
              />
              <FormControlLabel
                control={<Checkbox
                  checked={states.checkedD4} onChange={handleChangeChecked}
                  name="checkedD4" value={7} onClick={handleChange_check4} />}
                label="面接内容"
              />
            </FormGroup>
          </FormControl>
        </Paper>

        {formatText1()}
        {formatText2()}
        {formatText3()}
        {formatText4()}

        <p>反省点</p>
          <Typography className={classes.check1} >{check21}</Typography>
          <TextField
            className={classes.size}
            name='reflections'
            label="反省点を入力"
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.reflections}
            onChange={handleChange('reflections')}
          />
        
        <p>受験後の感想と後輩への助言</p>
          <Typography className={classes.check1} >{check22}</Typography>
          <TextField
            className={classes.size}
            name='impressions'
            label="詳細を入力"
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

export default ExaminationComponent;
