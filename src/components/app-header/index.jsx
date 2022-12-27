import classNames from 'classnames'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Center from './c-cpns/header-center'
import Left from './c-cpns/header-left'
import Right from './c-cpns/header-right'
import { HeaderWrapper } from './style'
const index = memo(() => {
  const { headerConfig } = useSelector((state) => {
    return {
      headerConfig:state.main.headerConfig
    }
  }, shallowEqual)
  const { isFixed } = headerConfig;
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className='top'>
          <Left />
          <Center />
          <Right/>
        </div>
        <div className='search-area'></div>
      </div>
      <div className='cover'></div>
    </HeaderWrapper>
  );
})

export default index