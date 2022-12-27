import React, { memo, useRef, useState } from "react";
import Proptypes from "prop-types";
import { RoomWrapper } from "./style";
import Rating from "@mui/material/Rating";
import classNames from "classnames";
import { Carousel } from "antd";
import IconLeftArrow from "@/assets/svg/icon_left_arrow";
import IconRightArrow from "@/assets/svg/icon_right_arrow";
import Indicator from "@/base-ui/indicator";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%",itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();
  // 左右轮播控制
  function controlHandle(e, isRight) {
    e.stopPropagation();
    let newIndex = selectIndex;
    if (isRight) {
      sliderRef.current.next();
      newIndex = newIndex + 1;
    } else {
      sliderRef.current.prev();
      newIndex -= 1;
    }
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }
  // 跳转逻辑
  function roomClickHandle() {
    // 如果外界有传入 itemClick， 则会跳转
    if (itemClick) {
      itemClick(itemData);
    }
  }
  // 子元素 根据不同情况展示不同的结构
  const cover = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const swiper = (
    <div className="swiper">
      <div className="controls">
        <div className="btn left" onClick={(e) => controlHandle(e,false)}>
          <IconLeftArrow width={25} height={25}></IconLeftArrow>
        </div>
        <div className="btn right" onClick={(e) => controlHandle(e,true)}>
          <IconRightArrow width={25} height={25}></IconRightArrow>
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <div className="dot-item" key={index}>
                <span
                  className={classNames("dot", {
                    active: index === selectIndex,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover">
              <img src={item} alt="" key={item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  return (
    <RoomWrapper itemWidth={itemWidth} onClick={roomClickHandle}>
      <div className="inner">
        {/* 如果有 picture_urls 就 展示轮播图 ，否则显示单个封面的*/}
        {itemData.picture_urls ? swiper : cover}
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
