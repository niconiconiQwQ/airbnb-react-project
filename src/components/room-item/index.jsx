import React, { memo } from "react";
import Proptypes from "prop-types";
import { RoomWrapper } from "./style";
import Rating from "@mui/material/Rating";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props;
  console.log();
  return (
    <RoomWrapper itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}</div>
        <div className="button">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "red" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomWrapper>
  );
});
RoomItem.prototype = {
  itemData: Proptypes.object,
};
export default RoomItem;
