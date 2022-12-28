import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Center from './c-cpns/header-center'
import Left from './c-cpns/header-left'
import Right from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'
const index = memo(() => {
  const [isSearch, setIsSearch] = useState(false)
  const { headerConfig } = useSelector((state) => {
    return {
      headerConfig:state.main.headerConfig
    }
  }, shallowEqual)
  const { isFixed } = headerConfig;
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <Left />
          <Center isSearch={isSearch} searchBarClick={ e=> setIsSearch(true)} />
          <Right />
        </div>
        <SearchAreaWrapper isSearch={ isSearch } />
      </div>
      {/* 遮罩层 */}
      {isSearch && <div className="cover" onClick={e=> setIsSearch(false)}></div>}
    </HeaderWrapper>
  );
})

export default index