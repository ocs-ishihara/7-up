import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import {firebaseDb} from '../../../plugins/firebase';
const ref = firebaseDb.ref('absence');

const useStyles = makeStyles((theme) => ({
  root:{
    textAlign: 'center',
    fontSize: 18,
  },
  root1:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  a :{
    height: 280,
  },
  Rbutton: {
    width: '100px',
    height: '50px',
    fontWeight: 'bold',
    color: '#FFF',
    background: '#5cca13',
    margin: 20,
    '&:hover': {
      background: ' #61bb25',
    },
  },
  haikei :{
    margin: 'auto',
    textAlign:'right',
    width: 250,
    height: 40,
  },
  haikei1 :{
    margin: 'auto',
    textAlign:'center',
    width: 250,
    height: 40,
  },
  size :{
    width: 270,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AbsenceComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [value] = React.useState();
  const [values, setValues] = React.useState({
    absence_day: '',
    type1: '',
    teacher1: '',
    type2: '',
    teacher2: '',
    type3: '',
    teacher3: '',
    type4: '',
    teacher4: '',
    reason: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickOpen = () => {
    let alert_text = "";
    let cnt = 0;

    if(values.absence_day === "") {
      alert_text = "欠課日が選択されていません。\n";
      cnt += 1;
    }
    if(values.type1 === "" && values.type2 === "" && values.type3 === "" && values.type4 === "") {
      alert_text += "欠課の種類が選択されていません。\n";
      cnt += 1;
    }
    if(values.teacher1 === "" && values.teacher2 === "" && values.teacher3 === "" && values.teacher4 === "") {
      alert_text += "担当講師が入力されていません。\n";
      cnt += 1;
    }
    if(values.reason === "") {
      alert_text += "理由が入力されていません。";
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

  const handleOnClickI = () => {
    alert('提出が完了しました。\nセレクトページへ');
    history.push('/home/select/');
    ref.push({
      "absence_day" : values.absence_day,
      "type1" : values.type1,
      "teacher1" : values.teacher1,
      "type2" : values.type2,
      "teacher2" : values.teacher2,
      "type3" : values.type3,
      "teacher3" : values.teacher3,
      "type4" : values.type4,
      "teacher4" : values.teacher4,
      "reason" : values.reason,
    });
  };

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <p>欠課日</p>
          <TextField
              className={classes.size}
              name='absence_day'
              type="date"
              value={values.absence_day}
              onChange={handleChange('absence_day')}
              variant="outlined"
          />
        <br/>

        <div className={classes.a}>
          <p className={classes.root1}>1限</p>
          <p>欠課の種類</p>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl>
              <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange('type1')}>
                <FormControlLabel value="欠課" control={<Radio />} label="欠課" />
                <FormControlLabel value="遅刻" control={<Radio />} label="遅刻" />
                <FormControlLabel value="早退" control={<Radio />} label="早退" />
              </RadioGroup>
            </FormControl>
          </Paper>
          
          <p>担当講師</p>
            <TextField
              className={classes.size}
              name='teacher1'
              label="担当講師を入力" 
              variant="outlined"
              value={values.teacher1}
              onChange={handleChange('teacher1')}
            />
        </div>

        <div className={classes.a}>
          <p className={classes.root1}>2限</p>
          <p>欠課の種類</p>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl>
              <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange('type2')}>
                <FormControlLabel value="欠課" control={<Radio />} label="欠課" />
                <FormControlLabel value="遅刻" control={<Radio />} label="遅刻" />
                <FormControlLabel value="早退" control={<Radio />} label="早退" />
              </RadioGroup>
            </FormControl>
          </Paper>
          
          <p>担当講師</p>
            <TextField
              className={classes.size}
              name='teacher2'
              label="担当講師を入力" 
              variant="outlined"
              value={values.teacher2}
              onChange={handleChange('teacher2')}
            />
        </div>

        <div className={classes.a}>
          <p className={classes.root1}>3限</p>
          <p>欠課の種類</p>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl>
              <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange('type3')}>
                <FormControlLabel value="欠課" control={<Radio />} label="欠課" />
                <FormControlLabel value="遅刻" control={<Radio />} label="遅刻" />
                <FormControlLabel value="早退" control={<Radio />} label="早退" />
              </RadioGroup>
            </FormControl>
          </Paper>
          
          <p>担当講師</p>
            <TextField
              className={classes.size}
              name='teacher3'
              label="担当講師を入力" 
              variant="outlined"
              value={values.teacher3}
              onChange={handleChange('teacher3')}
            />
        </div>

        <div className={classes.a}>
          <p className={classes.root1}>4限</p>
          <p>欠課の種類</p>
          <Paper variant="outlined" className={classes.haikei}>
            <FormControl >
              <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange('type4')}>
                <FormControlLabel value="欠課" control={<Radio />} label="欠課" />
                <FormControlLabel value="遅刻" control={<Radio />} label="遅刻" />
                <FormControlLabel value="早退" control={<Radio />} label="早退" />
              </RadioGroup>
            </FormControl>
          </Paper>
          
          <p>担当講師</p>
            <TextField
              className={classes.size}
              name='teacher4'
              label="担当講師を入力" 
              variant="outlined"
              value={values.teacher4}
              onChange={handleChange('teacher4')}
            />
        </div>

        <p>理由</p>
          <TextField
            className={classes.size}
            name='reason'
            label="理由を入力" 
            variant="outlined"
            multiline
            rowsMax={4}
            value={values.reason}
            onChange={handleChange('reason')}
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

export default AbsenceComponent;
