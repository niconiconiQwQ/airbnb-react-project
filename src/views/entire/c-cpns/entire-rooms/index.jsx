import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RoomsWrapper } from "./style";
const Rooms = memo(() => {
  /* 从redux中获取roomList数据 */
  const { roomList, totalCount, isLoading } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    };
  },shallowEqual);
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={item._id}></RoomItem>
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default Rooms;
