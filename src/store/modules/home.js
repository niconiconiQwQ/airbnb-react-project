import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services/index";
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload,{dispatch,getState}) => {
  // 性价比房源
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfo(res));
  });
  // 高分房源
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfo(res));
  });
  // 打折房源
  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountInfo(res));
  });
  // 推荐房源
  getHomeRecommendData().then((res) => {
    dispatch(changeRecommendInfo(res));
  })
  // 向往的地方
  getHomeLongforData().then((res) => {
    dispatch(changeLongforInfo(res));
  })
  getHomePlusData().then((res) => {
    dispatch(changePlusInfo(res));
  })
});
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo:{}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfo(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfo(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload;
    // },
  },
});
export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeRecommendInfo,
  changeLongforInfo,
  changePlusInfo,
} = homeSlice.actions;
export default homeSlice.reducer;