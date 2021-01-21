import { createSlice } from '@reduxjs/toolkit';
import { chatApi } from '../plugins/chatApi';

// Stateの初期状態
const initialState = {
    id: "",
    image: "",
    text: "",
    row: 1,
};

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setId: (state, action) => {
      return Object.assign({}, state, { id: action.payload });
    },
    setImage: (state, action) => {
      return Object.assign({}, state, { image: action.payload });
    },

    setText: (state, action) => {
      const txt = (action.payload).slice(0, 200);
      let rows = txt.split("\n").length;
      if(rows > 3) {
        rows = 3;
      };
      return Object.assign({}, state, { text: txt, row: rows });
    },
    initialMessage: state => {
      return Object.assign({}, state, { text: "", row: 1 });
    },
  }
});

export const { setText, initialMessage } = slice.actions;

export default slice.reducer;

export function chat(roomId, profile) {
  return async function(dispatch) {
    // 部屋ID・送信先プロフ画像をセット
    dispatch(slice.actions.setId(roomId));
    dispatch(slice.actions.setImage(profile));

    const msgs = await chatApi(roomId);  // 終わるまで待機
    // 読み込み後にチャット情報をローカルに格納する
    localStorage.removeItem(roomId);
    localStorage.setItem((roomId), JSON.stringify(msgs));
  };
};
