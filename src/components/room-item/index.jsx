import React, { memo } from "react";
import Proptypes from "prop-types";
import { RoomWrapper } from "./style";
const RoomItem = memo((props) => {
  const { itemData } = props;
  console.log();
  return <RoomWrapper>
    <div className="inner">
      <div className="cover">
        <img src={ itemData.picture_url} alt="" />
      </div>
      <div className="desc">
        {itemData.verify_info.messages.join('·')}
      </div>
      <div className="name">{ itemData.name}</div>
      <div className="price">￥{ itemData.price}</div>
    </div>
  </RoomWrapper>;
});
RoomItem.prototype = {
  itemData: Proptypes.object,
};
export default RoomItem;
