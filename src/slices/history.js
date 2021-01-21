import { createSlice } from '@reduxjs/toolkit';
import { internApi, applicationApi, participationApi, examinationApi,
  assessmentApi, offerApi, trainingApi } from '../plugins/historyApi';

const initialState = {
  data: null, // 情報の格納場所
  oneData: null,
};

const slice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setData: (state, action) => {
      return Object.assign({}, state, { data: action.payload });
    },

    setOneData: (state, action) => {
      return Object.assign({}, state, { oneData: action.payload });
    },
    initialOneData: state => {
      return Object.assign({}, state, { oneData: null });
    },
  }
});

export const { setOneData, initialOneData } = slice.actions;

export default slice.reducer;

export function log(id, ptr) {
  return async function(dispatch) {
    let data;
    switch(ptr) {
      case 1:
        data = await internApi(id);
        break;
      case 2:
        data = await applicationApi(id);
        break;
      case 3:
        data = await participationApi(id);
        break;
      case 4:
        data = await examinationApi(id);
        break;
      case 5:
        data = await assessmentApi(id);
        break;
      case 6:
        data = await offerApi(id);
        break;
      default:
        data = await trainingApi(id);
    };
    
    // 読み込み後に情報をストアに格納する
    dispatch(slice.actions.setData(data));
  };
};
