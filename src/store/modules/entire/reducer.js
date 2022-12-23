import * as actionTypes from "./constants"
const initialState = {
  currentPage: 0, // 当前页码
  roomList:[],// 房间列表
  totalCount: 0,//总数据个数
  isLoading: false
}
function reducer(state = initialState, action) {
  const {
    CHANGE_TOTAL_COUNT,
    CHANGE_ROOM_LIST,
    CHANGE_CURRENT_PAGE,
    CHANGE_ISLOADING
  } = actionTypes;
  switch (action.type) {
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList };
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case CHANGE_ISLOADING:
      return {...state,isLoading:action.isLoading}
    default:
      return state;
  }
}
export default reducer;