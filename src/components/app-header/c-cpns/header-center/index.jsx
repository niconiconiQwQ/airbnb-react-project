import IconSearch from "@/assets/svg/icon_search";
import searchTitles from "@/assets/data/search_titles.json";
import { CSSTransition } from "react-transition-group";
import React, { memo, useState } from "react";
import SearchTabs from "./c-cpns/search-tabs";
import { CenterWrapper } from "./style";
import SearchSections from "./c-cpns/search-sections";
const Center = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const [isShow,setIsShow] = useState(true)
  const titles = searchTitles.map((item) => item.title);
  function tabClickHandle(index) {
    setTabIndex(index);
  }
  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <span className="icon">
            <IconSearch />
          </span>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={tabClickHandle} />
          <div className="infos">
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});
export default Center;
