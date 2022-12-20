import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner"
import Rating from "@mui/material/Rating";
import SectionHeader from "@/components/section-header"
import {fetchHomeDataAction} from "@/store/modules/home"
import RoomItem from "@/components/room-item";
const index = memo(() => {
  /* 从redux获取数据 */
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo:state.home.goodPriceInfo
  }),shallowEqual)
  /* 派发异步事件，发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <SectionHeader title={goodPriceInfo.title} />
        <ul className="room-list">
          {goodPriceInfo.list?.slice(0, 8).map((item) => {
            return <RoomItem itemData={item} key={item.id} />;
          })}
        </ul>
      </div>
      {/* <>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </> */}
      <Rating name="read-only" value={4} readOnly />
    </HomeWrapper>
  );
})

export default index