import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";
const EntirePagination = memo(() => {
  const dispatch = useDispatch()
  /* redux数据 */
  const { totalCount, currentPage,roomList } = useSelector((state) => {
    return {
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList:state.entire.roomList,
    };
  },shallowEqual);
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  /* 事件处理 */
  function pageChangeHandle(event, pageCount) {
    // 回到顶部
    window.scrollTo(0,0)
    // 更新最新的页码
    dispatch(fetchRoomListAction(pageCount - 1));
  }
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} color="primary" onChange={pageChangeHandle}/>
          <div className="desc">
            第{startCount}-{endCount}个房源,共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
