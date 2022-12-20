import IconSearch from '@/assets/svg/icon_search';
import React, { memo } from 'react'
import {CenterWrapper} from "./style"
const Center = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <span className="icon">
          <IconSearch />
        </span>
      </div>
    </CenterWrapper>
  );
})
export default Center