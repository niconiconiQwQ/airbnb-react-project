import useScrollPosition from "@/hooks/useScrollPosition";
import classNames from "classnames";
import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Center from "./c-cpns/header-center";
import Left from "./c-cpns/header-left";
import Right from "./c-cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
const index = memo(() => {
  const [isSearch, setIsSearch] = useState(false);
  /* 从 redux中 拿数据 */
  const { headerConfig } = useSelector((state) => {
    return {
      headerConfig: state.main.headerConfig,
    };
  }, shallowEqual);
  const { isFixed,topAlpha } = headerConfig;
  /* 监听滚动 */
  const { scrollY } = useScrollPosition();
  // 用于记录最近的ScrollY
  const prevY = useRef(0);
  // 非搜索情况下，不断记录 prevY 的值
  if (!isSearch) prevY.current = scrollY;
  // 在弹出搜索功能的情况下，滚动的距离超过之前记录的距离的50 就让搜索框消失
  if (isSearch && Math.abs(scrollY - prevY.current) > 50) setIsSearch(false);
  /* 透明度的逻辑 */
  const isAlpha = topAlpha && scrollY === 0
  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper
        className={classNames({ fixed: isFixed })}
        isAlpha={isAlpha}
      >
        <div className="content">
          <div className="top">
            <Left />
            <Center
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <Right />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {/* 遮罩层 */}
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default index;
