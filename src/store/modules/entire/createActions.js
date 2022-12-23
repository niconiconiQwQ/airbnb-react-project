import { getEntireRoomList } from "@/services/modules/entire";
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
  CHANGE_ISLOADING
} from "./constants";
export const changeCurrentPage =(currentPage)=> {
  return { type: CHANGE_CURRENT_PAGE, currentPage };
}
export const changeRoomList = (roomList)=> {
  return { type: CHANGE_ROOM_LIST, roomList };
}
export function changeTotalCount(totalCount) {
  return { type: CHANGE_TOTAL_COUNT, totalCount };
}
export function changeIsLoadingAction(isLoading) {
  return { type: CHANGE_ISLOADING ,isLoading};
}
export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    // 修改当前页
    dispatch(changeCurrentPage(page));
    // 根据页码设置偏移量 ,获取数据
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false))
    const { list: roomList, totalCount } = res;
    dispatch(changeRoomList(roomList));
    dispatch(changeTotalCount(totalCount));
  };
};
