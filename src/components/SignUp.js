import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { signUp, passHash } from '../slices/auth';
import * as Colors from '@material-ui/core/colors';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import IconButton from '@material-ui/core/IconButton';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ExitToApp from '@material-ui/icons/ExitToApp';

import tileData from '../images/PlofileImage';

let counter = 0;

const useStyles = makeStyles((theme) => ({
  root1: {
    '& > *': {
      margin: theme.spacing(-1),
      width: '35ch',
    },
  },
  root2: {
    marginRight: theme.spacing(40),
  },
  button: {
    padding: theme.spacing(1),
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

const SignUpComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    id: '',
    password: '',
    username: '',
    imageURL: '',
  });
  console.log(values.imageURL);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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

  const hash = useSelector(state => state.auth.hashed);
  if(counter === 1) {
    counter = 0;
    dispatch(signUp(values.id, hash, values.username, values.imageURL));
    setValues({ ...values, id: '' });
    setValues({ ...values, username: '' });
    setValues({ ...values, imageURL: '' });
  };
  const handleOnClickSignUp = () => {
    dispatch(passHash(values.password));
    setValues({ ...values, password: '' });
    counter = 1;
  };

  return (
    <div >
      <div className="centerTable">
        <h2>
          サインアップ
        </h2>
        <div style={{textAlign:'center'}}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-username">IDを入力</InputLabel>
            <OutlinedInput
                id="outlined-username" type={'text'}
                value={values.id} onChange={handleChange('id')}
                labelWidth={70}
            />
          </FormControl>
          <br />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-password">PWを入力</InputLabel>
            <OutlinedInput
                id="outlined-password" type={'text'}
                value={values.password} onChange={handleChange('password')}
                labelWidth={70}
            />
          </FormControl>
          <br />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-password">ユーザー名</InputLabel>
            <OutlinedInput
                id="outlined-password" type={'text'}
                value={values.username} onChange={handleChange('username')}
                labelWidth={70}
            />
          </FormControl>
          <br />
          <IconButton onClick={() => setOpen(true)}>
            <Typography
              children="アイコン画面選択　"
              className={classes.typography}
            />
            <CameraAltIcon/>
          </IconButton>
          <br />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => handleOnClickSignUp()}
          >
            サインアップ
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
              onClick={() => setOpen(false)}
            >
              閉じる
            </Button>
          </DialogActions>
        </Dialog>

        <br/><br/>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<ExitToApp />}
          onClick={() => (history.goBack())}
        >
          戻る
        </Button>
      </div>
    </div>
  );
};

export default SignUpComponent;
