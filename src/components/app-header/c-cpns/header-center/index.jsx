import IconSearch from '@/assets/svg/icon_search';
import searchTitles from "@/assets/data/search_titles.json"
import React, { memo, useState } from 'react'
import SearchTabs from './c-cpns/search-tabs';
import {CenterWrapper} from "./style"
import SearchSections from './c-cpns/search-sections';
const Center = memo(() => {
  const [tabIndex,setTabIndex] = useState(0)
  const titles = searchTitles.map(item=>item.title)
  function tabClickHandle(index) {
    setTabIndex(index);
  }
  return (
    <CenterWrapper>
      {/* <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <span className="icon">
          <IconSearch />
        </span>
      </div> */}
      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={tabClickHandle} />
        <div className="infos">
          <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
        </div>
      </div>
    </CenterWrapper>
  );
})
export default Center