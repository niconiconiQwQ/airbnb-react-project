import RoomItem from "@/components/room-item";
import { changeDetailInfo } from "@/store/modules/detail";
import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoomsWrapper } from "./style";
const Rooms = memo(() => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  /* 从redux中获取roomList数据 */
  const { roomList, totalCount, isLoading } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    };
  }, shallowEqual);
  /* 事件处理 */
  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfo(item));
    navigate("/detail");
  }, [useNavigate]);
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={itemClickHandle}
            ></RoomItem>
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default Rooms;
