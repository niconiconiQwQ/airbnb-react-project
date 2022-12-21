import React, { memo } from 'react'
import PropTypes from "prop-types"
import RoomItem from "@/components/room-item";
import { RoomWrapper } from './style';
const SectionRooms = memo((props) => {
  const {roomList =  [],itemWidth} = props
  return (
    <RoomWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} itemWidth={ itemWidth } />;
      })}
    </RoomWrapper>
  );
})
SectionRooms.prototype = {
  roomList:PropTypes.array
}
export default SectionRooms