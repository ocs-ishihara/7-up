import { createSlice } from '@reduxjs/toolkit';
import { loginApi } from '../plugins/authApi';
import {firebaseDb} from '../plugins/firebase';
const ref = firebaseDb.ref('users');

const initialState = {
  user: null, // ユーザー情報の格納場所
  flag: false,
  hashed: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return Object.assign({}, state, { user: action.payload });
    },
    setFlag: state => {
      return Object.assign({}, state, { flag: !state.flag });
    },

    passHash: (state, action) => {
      const crypto = require("crypto");
      const sha512 = crypto.createHash('sha512');
      sha512.update(action.payload);
      const hash = sha512.digest('hex');

      return Object.assign({}, state, { hashed: hash });
    },

    logout: state => {
      return Object.assign({}, state, { user: null });
    },
  }
});

export const { setFlag, passHash, logout } = slice.actions;

export default slice.reducer;

// 認証済みか確認するセレクター
export const isAuthSelector = state => state.auth.user !== null;

// ログイン機能
export function login(id, password) {
  return async function(dispatch) {
    const user = await loginApi(id, password);  // 終わるまで待機
    
    if(user !== null) {
      // ログイン後にユーザー情報をストアに格納する
      dispatch(slice.actions.setUser(user));
    }
    else {
      dispatch(setFlag());
    };
  };
};

// サインアップ機能
export const signUp = (id, password, username, imageURL) => {
  return function() {
    try {
      const usersRef = ref.child(id);
      usersRef.set({
        "passWord" : password,
        "userName" : username,
        "profileImage": imageURL,
      });
    } catch (e) {
      console.log(e);
    };
  };
};
