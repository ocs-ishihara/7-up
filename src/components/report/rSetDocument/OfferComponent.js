import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { initialOneData } from "../../../slices/history";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { NativeSelect } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { Radio, RadioGroup } from '@material-ui/core';
import { FormControl, FormControlLabel } from '@material-ui/core';
import { InputLabel, InputAdornment, InputBase } from '@material-ui/core';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';

import {firebaseDb} from '../../../plugins/firebase';
const ref = firebaseDb.ref('report/offer');

let keyIn = 0;
let data = {};

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #666666',
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    //padding: '13px 180px 20px 180px',
    width: 220,
    padding:'15px 18px',
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
  root2:{
    display: 'flex',
  },
  check1:{
    color: '#ff0000'
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
  haikei :{
    margin: 'auto',
    width: 270,
    height: 45,
  },
  bbb:{
    marginLeft: 25,
  },
  size :{
    width: 270,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Offer1Component = () => {
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
    data2.company = ""; data2.president = "";
    data2.position = "";  data2.postal_code = "";
    data2.address = "";  data2.phone_number = "";
    data2.fax_number = ""; data2.business = "";
    data2.section = ""; data2.capital = "";
    data2.sales = ""; data2.employees = "";
    data2.industry = ""; data2.activity = "";
    data2.details = ""; data2.location = "";
    data2.branch_name = ""; data2.work_place = "";
    data2.educational = ""; data2.occupation = "";
    data2.job_description = "";
    data = data2;
    setFlag(false);
  };
  if(oneData !== null) {
    keyIn = 1;
    data = oneData;
    dispatch(initialOneData());
  };
  const [values, setValues] = React.useState({
    company: data.company, president: data.president,
    position: data.position, postal_code: data.postal_code,
    address: data.address, phone_number: data.phone_number,
    fax_number: data.fax_number, business: data.business,
    section: data.section, capital: data.capital,
    sales: data.sales, employees: data.employees,
    industry: data.industry, activity: data.activity,
    details: data.details, location: data.location,
    branch_name: data.branch_name, work_place: data.work_place,
    educational: data.educational, occupation: data.occupation,
    job_description: data.job_description,
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

  const [loading, setLoading] = React.useState(true);
  const [loading2, setLoading2] = React.useState(true);
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

    if(event.target.value.length > 0){
      if(prop === 'company'){
        setCheck1("");
      }
      if(prop === 'president'){
        setCheck2("");
      }
      if(prop === 'position'){
        setCheck3("");
      }
      if(prop === 'postal_code'){
        setCheck4("");
      }
      if(prop === 'address'){
        setCheck5("");
      }
      if(prop === 'phone_number'){
        setCheck6("");
      }
      if(prop === 'fax_number'){
        setCheck7("");
      }
      if(prop === 'business'){
        setCheck8("");
      }
      if(prop === 'section'){
        setCheck9("");
      }
      if(prop === 'capital'){
        setCheck10("");
      }
      if(prop === 'sales'){
        setCheck11("");
      }
      if(prop === 'employees'){
        setCheck12("");
      }
      if(prop === 'industry'){
        setCheck13("");
      }
      if(prop === 'activity'){
        setCheck14("");
      }
      if(prop === 'details'){
        setCheck15("");
      }
      if(prop === 'location'){
        setCheck16("");
      }
      if(prop === 'branch_name'){
        setCheck17("");
      }
      if(prop === 'work_place'){
        setCheck18("");
      }
      if(prop === 'educational'){
        setCheck19("");
      }
      if(prop === 'occupation'){
        setCheck20("");
      }
      if(prop === 'job_description'){
        setCheck21("");
      }

      if(event.target.value === "縁故" || event.target.value === "その他") {
        setLoading(false);
      } else {
        setLoading(true);
      }
      if(event.target.value === "支社") {
        setLoading2(false);
      } else {
        setLoading2(true);
      }
    }
  };

  const handleClickOpen = () => {
    let cnt = 0;
    
    if(values.company === "") {
      setCheck1("※企業名が入力されていません");
      cnt += 1;
    }
    if(values.president === "") {
      setCheck2("※代表者情報が入力されていません");
      cnt += 1;
    }
    if(values.position === "") {
      setCheck3("※役職が入力されていません");
      cnt += 1;
    }
    if(values.postal_code === "") {
      setCheck4("※郵便番号が入力されていません");
      cnt += 1;
    }
    if(values.address === "") {
      setCheck5("※住所が入力されていません");
      cnt += 1;
    }
    if(values.phone_number === "") {
      setCheck6("※電話番号が入力されていません");
      cnt += 1;
    }
    /*
    if(values.fax_number === "") {
      setCheck7("※FAXが入力されていません");
      cnt += 1;
    }
    */
    if(values.business === "") {
      setCheck8("※事業情報が入力されていません");
      cnt += 1;
    }
    if(values.section === "") {
      setCheck9("※株式市場が選択されていません");
      cnt += 1;
    }
    /*
    if(values.capital === "") {
      setCheck10("※資本金が入力されていません");
      cnt += 1;
    }
    if(values.sales === "") {
      setCheck11("※年商が入力されていません");
      cnt += 1;
    }
    if(values.employees === "") {
      setCheck12("※従業員数が入力されていません");
      cnt += 1;
    }
    */
    if(values.industry === "") {
      setCheck13("※業種が選択されていません");
      cnt += 1;
    }
    if(values.activity === "") {
      setCheck14("※活動方法が選択されていません");
      cnt += 1;
    }
    if(values.activity === "縁故" || values.activity === "その他") {
      if(values.details === "") {
        setCheck15("※詳細が入力されていません");
        cnt += 1;
      }
    }
    if(values.location === "") {
      setCheck16("※採用地区が選択されていません");
      cnt += 1;
    }
    if(values.location === "") {
      setCheck16("※採用地区が選択されていません");
      cnt += 1;
    }
    if(values.location === "支社") {
      if(values.branch_name === "") {
        setCheck17("※支店名が入力されていません");
        cnt += 1;
      }
    }
    if(values.work_place === "") {
      setCheck18("※勤務地が入力されていません");
      cnt += 1;
    }
    if(values.educational === "") {
      setCheck19("※採用区分が選択されていません");
      cnt += 1;
    }
    if(values.occupation === "") {
      setCheck20("※職種が選択されていません");
      cnt += 1;
    }
    if(values.job_description === "") {
      setCheck21("※職務内容が入力されていません");
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
        "president" : values.president,
        "position" : values.position,
        "postal_code" : values.postal_code,
        "address" : values.address,
        "phone_number" : values.phone_number,
        "fax_number" : values.fax_number,
        "business" : values.business,
        "section" : values.section,
        "capital" : values.capital,
        "sales" : values.sales,
        "employees" : values.employees,
        "industry" : values.industry,
        "activity" : values.activity,
        "details" : values.details,
        "location" : values.location,
        "branch_name" : values.branch_name,
        "work_place" : values.work_place,
        "educational" : values.educational,
        "occupation" : values.occupation,
        "job_description" : values.job_description,
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
        "president" : values.president,
        "position" : values.position,
        "postal_code" : values.postal_code,
        "address" : values.address,
        "phone_number" : values.phone_number,
        "fax_number" : values.fax_number,
        "business" : values.business,
        "section" : values.section,
        "capital" : values.capital,
        "sales" : values.sales,
        "employees" : values.employees,
        "industry" : values.industry,
        "activity" : values.activity,
        "details" : values.details,
        "location" : values.location,
        "branch_name" : values.branch_name,
        "work_place" : values.work_place,
        "educational" : values.educational,
        "occupation" : values.occupation,
        "job_description" : values.job_description,
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
        
        <p>代表者情報</p>
          <Typography className={classes.check1} >{check2}</Typography>
          <TextField
            className={classes.size}
            name='president'
            label="例）情報　太郎" 
            variant="outlined"
            value={values.president}
            onChange={handleChange('president')}
          />

        <p>役職</p>
          <Typography className={classes.check1} >{check3}</Typography>
          <TextField
            className={classes.size}
            name='position'
            label="例）代表取締役" 
            variant="outlined"
            value={values.position}
            onChange={handleChange('position')}
          />

        <p>本社所在地情報</p>
          <Typography className={classes.check1} >{check4}</Typography>
          <TextField
            className={classes.size}
            name='postal_code'
            type="number"
            label="郵便番号を入力"
            variant="outlined"
            value={values.postal_code}
            onChange={handleChange('postal_code')}
          />

        <br/><br/>
          <Typography className={classes.check1} >{check5}</Typography>
          <TextField
            className={classes.size}
            name='address'
            label="住所を入力" 
            variant="outlined"
            value={values.address}
            onChange={handleChange('address')}
          />

        <p>連絡先情報を入力</p>
          <Typography className={classes.check1} >{check6}</Typography>
          <TextField
            className={classes.size}
            name='phone_number'
            type="number"
            label="電話番号を入力"
            variant="outlined"
            value={values.phone_number}
            onChange={handleChange('phone_number')}
          />

        <br/><br/>
          <Typography className={classes.check1} >{check7}</Typography>
          <TextField
            className={classes.size}
            name='fax_number'
            type="number"
            label="FAXを入力"
            variant="outlined"
            value={values.fax_number}
            onChange={handleChange('fax_number')}
          />

        <p>事業情報</p>
          <Typography className={classes.check1} >{check8}</Typography>
          <TextField
            className={classes.size}
            name='business'
            label="例）システム開発" 
            variant="outlined"
            value={values.business}
            onChange={handleChange('business')}
          />

        <p>株式情報</p>
          <Typography className={classes.check1} >{check9}</Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="select">株式市場</InputLabel>
              <NativeSelect
              value={values.section}
              open={open}
              onChange={handleChange('section')}
              input={<BootstrapInput />}
              >
                <option value="" aria-label="None"></option>
                <option value="東証一部">東証一部</option>
                <option value="東証二部">東証二部</option>
                <option value="名証一部">名証一部</option>
                <option value="名証二部">名証二部</option>
                <option value="札証">札証</option>
                <option value="福証">福証</option>
                <option value="JASDAQ">JASDAQ</option>
                <option value="TOKYO PRO Market">TOKYO PRO Market</option>
                <option value="非上場">非上場</option>
            </NativeSelect>
          </FormControl>

        <p>資金情報</p>
          <Typography className={classes.check1} >{check10}</Typography>
          <TextField
            className={classes.size}
            name='capital'
            label="資本金を入力"
            type="number"
            variant="outlined"
            value={values.capital}
            onChange={handleChange('capital')}
            InputProps={{
              endAdornment: <InputAdornment position="end">万</InputAdornment>,
            }}
          />

        <br/><br/>
          <Typography className={classes.check1} >{check11}</Typography>
          <TextField
            className={classes.size}
            name='sales'
            label="年商を入力"
            type="number"
            variant="outlined"
            value={values.sales}
            onChange={handleChange('sales')}
            InputProps={{
              endAdornment: <InputAdornment position="end">万</InputAdornment>,
            }}
          />

        <br/><br/>
          <Typography className={classes.check1} >{check12}</Typography>
          <TextField
            className={classes.size}
            name='employees'
            label="従業員数を入力"
            type="number"
            variant="outlined"
            value={values.employees}
            onChange={handleChange('employees')}
            InputProps={{
              endAdornment: <InputAdornment position="end">人</InputAdornment>,
            }}
          />
 
        <p>業種</p>
          <Typography className={classes.check1} >{check13}</Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="select">業種</InputLabel>
              <NativeSelect
              value={values.industry}
              open={open}
              onChange={handleChange('industry')}
              input={<BootstrapInput />}
              >
                <option value="" aria-label="None"></option>
                <option value="P.情報処理産業一般">P.情報処理産業一般</option>
                <option value="A.農業">A.農業</option>
                <option value="B.林業">B.林業</option>
                <option value="C.漁業">C.漁業</option>
                <option value="D.鉱業">D.鉱業</option>
                <option value="E.建設業">E.建設業</option>
                <option value="F.製造業">F.製造業</option>
                <option value="G.電気・ガス・熱供給・水道業">G.電気・ガス・熱供給・水道業</option>
                <option value="H.運輸・通信業">H.運輸・通信業</option>
                <option value="I.卸売・小売業・飲食店">I.卸売・小売業・飲食店</option>
                <option value="J.金融・保険業">J.金融・保険業</option>
                <option value="K.不動産業">K.不動産業</option>
                <option value="L.サービス業">L.サービス業</option>
                <option value="M.公務">M.公務</option>
                <option value="N.分類不能の産業">N.分類不能の産業</option>
            </NativeSelect>
          </FormControl>

        <p>活動方法</p>
          <Typography className={classes.check1} >{check14}</Typography>
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
                <option value="縁故">縁故</option>
                <option value="自由応募">自由応募</option>
                <option value="その他">その他</option>
            </NativeSelect>
          </FormControl>

        <p>その他・縁故を選択した場合入力</p>
          <Typography className={classes.check1} >{check15}</Typography>
          <TextField
            className={classes.size}
            name='details'
            label="詳細を入力" 
            variant="outlined"
            disabled={loading}
            value={values.details}
            onChange={handleChange('details')}
          />

        <br/><br/>
        <p　className={classes.root1}>自己に関することを入力</p>
        <p>採用地区</p>
          <Typography className={classes.check1} >{check16}</Typography>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl>
              <RadioGroup row aria-label="gender" name="gender1" value={values.location} onChange={handleChange('location')}>
                <FormControlLabel value="本社" control={<Radio />} label="本社" />
                <FormControlLabel value="支社" control={<Radio />} label="支社" />
              </RadioGroup>
            </FormControl>
          </Paper>
        <p></p>
          <Typography className={classes.check1} >{check17}</Typography>
          <TextField
            className={classes.size}
            name='branch_name'
            label="支店名を入力" 
            variant="outlined"
            disabled={loading2}
            value={values.branch_name}
            onChange={handleChange('branch_name')}
          />

        <p>勤務地を入力</p>
          <Typography className={classes.check1} >{check18}</Typography>
          <TextField
            className={classes.size}
            name='work_place'
            label="勤務地を入力"
            variant="outlined"
            value={values.work_place}
            onChange={handleChange('work_place')}
          />

        <p>採用区分</p>
          <Typography className={classes.check1} >{check19}</Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="select">区分</InputLabel>
              <NativeSelect
              value={values.educational}
              open={open}
              onChange={handleChange('educational')}
              input={<BootstrapInput />}
              >
                <option value="" aria-label="None"></option>
                <option value="大卒">大卒</option>
                <option value="専門卒">専門卒</option>
                <option value="高卒">高卒</option>
                <option value="その他">その他</option>
            </NativeSelect>
          </FormControl>

        <p>職種</p>
          <Typography className={classes.check1} >{check20}</Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="select">職種</InputLabel>
              <NativeSelect
              value={values.occupation}
              open={open}
              onChange={handleChange('occupation')}
              input={<BootstrapInput />}
              >
                <option value="" aria-label="None"></option>
                <option value="ソフト開発">ソフト開発</option>
                <option value="インフラエンジニア">インフラエンジニア</option>
                <option value="システム運用">システム運用</option>
                <option value="ヘルプデスク">ヘルプデスク</option>
                <option value="営業職">営業職</option>
                <option value="事務職">事務職</option>
                <option value="医療事務">医療事務</option>
                <option value="技術職">技術職</option>
                <option value="その他">その他</option>
            </NativeSelect>
          </FormControl>

        <p>職務内容</p>
          <Typography className={classes.check1} >{check21}</Typography>
          <TextField
            className={classes.size}
            name='job_description'
            label="内容を入力"
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.job_description}
            onChange={handleChange('job_description')}
          />

        <br/><br/>
        <Button 
          className={classes.Rbutton}
          variant="contained"
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

export default Offer1Component;
