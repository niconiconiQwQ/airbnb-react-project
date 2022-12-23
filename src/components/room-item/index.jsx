import React, { memo, useRef } from "react";
import Proptypes from "prop-types";
import { RoomWrapper } from "./style";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import IconLeftArrow from "@/assets/svg/icon_left_arrow";
import IconRightArrow from "@/assets/svg/icon_right_arrow";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props;
  const sliderRef = useRef()
  function controlHandle(isRight) {
    if (isRight) {
      sliderRef.current.next();
    } else {
      sliderRef.current.prev();
    }
  }
  return (
    <RoomWrapper itemWidth={itemWidth}>
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className="swiper">
          <div className="controls">
            <div className="btn left" onClick={(e) => controlHandle(false)}>
              <IconLeftArrow width={25} height={25}></IconLeftArrow>
            </div>
            <div className="btn right" onClick={(e) => controlHandle(true)}>
              <IconRightArrow width={25} height={25}></IconRightArrow>
            </div>
          </div>
          <Carousel dots={false} ref={ sliderRef }>
            {itemData?.picture_urls?.map((item) => {
              return (
                <div className="cover">
                  <img src={item} alt="" key={item} />
                </div>
              );
            })}
          </Carousel>
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
