import { getEntireRoomList } from "@/services/modules/entire";
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
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
export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    // 根据页码设置偏移量 ,获取数据
    const currentPage = getState().entire.currentPage;
    const res = await getEntireRoomList(currentPage * 20);
    const { list: roomList, totalCount } = res;
    dispatch(changeRoomList(roomList));
    dispatch(changeTotalCount(totalCount));
  };
};
