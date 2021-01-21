import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOff, toggleOn } from "../../slices/darkMode";
import { login, signUp, setFlag, passHash, logout } from '../../slices/auth';

import { makeStyles } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Brightness4 from '@material-ui/icons/Brightness4';
import Brightness7 from '@material-ui/icons/Brightness7';

import Header from '../header/Header3Component';
import tileData from '../../images/PlofileImage';

import {firebaseDb} from '../../plugins/firebase';
const ref = firebaseDb.ref('users');
let counter = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:'center',
    fontSize: 18,
  },
  root2: {
    margin: theme.spacing(2),
  },
  RSbutton1: {
    width: '150px',
    height: '50px',
    fontWeight: 'bold',
    color: '#FFF',
    background: '#009e96',
    margin: '20px',
    '&:hover': {
      background: '#008a83',
    },
  },
  RSbutton2: {
    width: '150px',
    height: '50px',
    fontWeight: 'bold',
    color: '#FFF',
    background: '#e60012',
    margin: '20px',
    '&:hover': {
      background: '#c7000b',
    },
  },
  button: {
    margin: theme.spacing(2),
    color: Colors.common.white,
  },
  typography: {
    fontSize: 20,
  },
  gridList: {
    width: 240,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const SettingsComponent = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.userId);
  const userName = useSelector(state => state.auth.user.userName);
  const mode = useSelector(state => state.dark.mode);

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    password1: '',
    password2: '',
    password3: '',
    showPassword1: false,
    showPassword2: false,
    showPassword3: false,
    imageURL: '',
  });
  const handleClickShowPassword1 = (prop) => {
    switch(prop) {
      case 1:
        setValues({ ...values, showPassword1: !values.showPassword1 });
        break;
      case 2:
        setValues({ ...values, showPassword2: !values.showPassword2 });
        break;
      default:
        setValues({ ...values, showPassword3: !values.showPassword3 });
        break;
    };
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleCC = (e) => {
    try {
      const type = e.target.files[0].type;
      if(type.slice(0, 5) !== 'image') {
        alert("画像ファイルを選択してください。");
        return;
      };

      const img = new Image();
      img.src = URL.createObjectURL(e.target.files[0]);
      img.onload = () => {
        let width, height;
        // 長辺は指定サイズ、他辺は元画像の比に従う
        if(img.width > img.height) {
          const ratio = (img.height / img.width);
          width = 100;
          height = 100 * ratio;
        }
        else {
          const ratio = (img.width / img.height);
          width = 100 * ratio;
          height = 100;
        };

        // 設定した画像の描画
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        // データURLに変換
        const base64 = canvas.toDataURL(type);
        setValues({ ...values, imageURL: base64 });
      };
    } catch(err) {
      console.log(err);
    };
  };
  const handleCD = (e) => {
    setValues({ ...values, imageURL: e.target.src });
  };

  const hash = useSelector(state => state.auth.user.hash);
  const hashed = useSelector(state => state.auth.hashed);
  const flag = useSelector(state => state.auth.flag);
  const subIn = async() => {
    await dispatch(login(userId, hashed));
    counter = 3;
    setValues({ ...values, password3: '' });
  };
  if(counter === 1){
    if(hash !== hashed ) {
      counter = 0;
      alert("パスワードが間違っています。");
    }
    else {
      counter = 2;
      dispatch(passHash(values.password2));
      setValues({ ...values, password2: '' });
    };
  }
  else if(counter === 2) {
    dispatch(signUp(userId, hashed, userName));
    subIn();
  }
  else if(counter === 3) {
    counter = 0;
    if(flag) {
      alert("パスワード変更に失敗しました。\nもう一度やり直してください。");
      dispatch(setFlag());
    }
    else {
      alert("パスワードを変更しました。");
      history.goBack();
    };
  };

  const submit = () => {
    let txt = "";
    if(values.password1 === '') {
      txt = "現在のパスワードが入力されていません。\n";
    };
    if(values.password2 === '') {
      txt += "新しいパスワードが入力されていません。\n";
    };
    if(values.password3 === '') {
      txt += "再入力（確認用）が入力されていません。";
    };
    if(values.password2 !== values.password3) {
      txt += "パスワードが間違っています。";
    };
    if(txt !== "") {
      alert(txt);
      return;
    };

    counter = 1;
    dispatch(passHash(values.password1));
    setValues({ ...values, password1: '' });
  };

  const changeImage = () => {
    try {
      const usersRef = ref.child(userId);
      usersRef.update({
        "profileImage": values.imageURL,
      });
      alert("アイコン画像を変更しました");
      setOpen(false);
    } catch (e) {
      console.log(e);
      alert("アイコン画像を変更できませんでした");
      setOpen(false);
    };
  };

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <div>
          <Header title="設定" />
          ユーザー名：{userName}　ID：{userId}
        </div>
        <div>
          <FormControl className={classes.root2} variant="outlined">
            <InputLabel htmlFor="">現在のパスワード</InputLabel>
            <OutlinedInput
              type={values.showPassword1 ? 'text' : 'password'}
              value={values.password1} onChange={handleChange('password1')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton 
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword1(1)}
                    onMouseDown={handleMouseDownPassword} edge="end"
                  >
                    {values.showPassword1 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={140}
            />
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.root2} variant="outlined">
            <InputLabel htmlFor="">新しいパスワード</InputLabel>
              <OutlinedInput
                type={values.showPassword2 ? 'text' : 'password'}
                value={values.password2} onChange={handleChange('password2')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton 
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword1(2)}
                      onMouseDown={handleMouseDownPassword} edge="end"
                    >
                    {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                  }
                labelWidth={140}
              />
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.root2} variant="outlined">
            <InputLabel htmlFor="">再入力（確認用）</InputLabel>
              <OutlinedInput
                type={values.showPassword3 ? 'text' : 'password'}
                value={values.password3} onChange={handleChange('password3')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton 
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword1(3)}
                      onMouseDown={handleMouseDownPassword} edge="end"
                    >
                    {values.showPassword3 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                  }
                labelWidth={140}
              />
          </FormControl>
        </div>
        <div>
          <Button
            className={classes.RSbutton1} variant="contained"
            color="primary" onClick={submit}
          >
            パスワード変更
          </Button>
          <br />
          <IconButton onClick={() => setOpen(true)}>
            <Typography
              children="アイコン画像変更　"
              color="textPrimary"
              className={classes.typography}
            />
            <CameraAltIcon/>
          </IconButton>
          <br />
          <IconButton
            aria-label="brightness"
            onClick={() => mode ? dispatch(toggleOff()) : dispatch(toggleOn())}
          >
            <Typography
              children="ダークモード切替　"
              color="textPrimary"
              className={classes.typography}
            />
            {mode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <br />
          <Button
            className={classes.RSbutton2}
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(logout());
            }}
          >
            ログアウト
          </Button>
        </div>

        <input
          type="file" accept="image/*"
          style={{ display: "none" }}
          id="photo"
          onChange={handleCC}
        />
        <Dialog
          open={open} onClose={() => setOpen(false)}
          aria-labelledby="photo-dialog-title"
          aria-describedby="photo-dialog-description"
        >
          <DialogTitle id="photo-dialog-title">{"アイコン画像を選択して"}</DialogTitle>
          <DialogContent>
            <GridList cellHeight={80} className={classes.gridList} cols={3}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img} onClick={handleCD}>
                  <Avatar className={classes.large} src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </DialogContent>
          <DialogActions>
            <label htmlFor="photo">
              <Button
                variant="contained" color="primary"
                component="span" children="カスタム選択"
              />
            </label>
            <Avatar src={values.imageURL} />
            <Button
              variant="contained" color="primary"
              onClick={changeImage}
            >
              更新
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default SettingsComponent;
