import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import AppHeader from "@/components/app-header";
import Rooms from "./c-cpns/entire-rooms";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";
import { changeHeaderConfigAction } from "@/store/modules/main";
const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({isFixed:true}))
  }, [dispatch])
  return (
    <EntireWrapper>
      <AppHeader/>
      <EntireFilter></EntireFilter>
      <Rooms></Rooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  );
});

export default Entire;
