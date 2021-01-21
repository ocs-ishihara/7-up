import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { login, passHash, setFlag } from '../../slices/auth';
import * as Colors from '@material-ui/core/colors';

import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

let counter = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: 'auto',
      marginTop: theme.spacing(10),
      width: theme.spacing(70),
      height: theme.spacing(50),
      textAlign: 'center',
    },
  },
  root2: {
    '& > *': {
      margin: theme.spacing(2),
      width: '35ch',
    },
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  button: {
    padding: theme.spacing(1),
    color: Colors.common.white,
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -15,
    marginLeft: -15,
  },
  margin: {
    margin: theme.spacing(1),
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const flag = useSelector(state => state.auth.flag);
  const [id, setId] = React.useState('');
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setFlag());
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const hash = useSelector(state => state.auth.hashed);
  const submit = async() => {
    const str = id;
    await dispatch(login(id, hash));
    setLoading(false);

    if(str.slice(0, 2) === "00") {
      history.push('/home2');
    }
    else {
      history.push('/home');
    };
  };
  if(counter === 1) {
    counter = 0;
    submit();
  };

  const handleOnClick = () => {
    let txt = "";
    if(id === '') {
      txt = "IDが入力されていません。\n";
    };
    if(values.password === '') {
      txt += "PWが入力されていません。";
    };
    if(txt !== "") {
      alert(txt);
      return;
    };
    setLoading(true);

    dispatch(passHash(values.password));
    setValues({ ...values, password: '' });
    counter = 1;
  };

  const handleOnClickI = () => {
    setId("123456");
    setValues({ ...values, password: "Gohan" });
  };
  const handleOnClickT = () => {
    setId("001234");
    setValues({ ...values, password: "Nato" });
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="centerTable">
        <div className={classes.root}>
          <Paper>
            <br /><h1>ログイン</h1>
            <div className={classes.root2}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-id">IDを入力</InputLabel>
                <OutlinedInput
                  id="outlined-id" value={id}
                  onChange={e => setId(e.target.value)}
                  labelWidth={70}
                />
              </FormControl>
              <br />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">PWを入力</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password} onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility" onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword} edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
            </div>
            <div className={classes.wrapper}>
              <Button
                variant="contained" color="primary" disabled={loading} 
                onClick={handleOnClick} className={classes.button}
              >
                ログイン
              </Button>
              {loading && <CircularProgress size={32} className={classes.buttonProgress} />}
            </div>
          </Paper>
        </div>
        <Button
          className={classes.button} variant="contained"
          color="primary" onClick={handleOnClickI}
        >
          生徒用ショトカ
        </Button>
        <Button
          className={classes.button} variant="contained"
          color="primary" onClick={handleOnClickT}
        >
          講師用ショトカ
        </Button>
        
        <Dialog
          open={flag} onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"えらー"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              IDまたはPWが間違っています。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* サインアップ用 */}
      <Fab
        className={classes.margin}
        size="small"
        color="secondary"
        aria-label="add"
        onClick={() => history.push('/SignUp')}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default LoginComponent;
