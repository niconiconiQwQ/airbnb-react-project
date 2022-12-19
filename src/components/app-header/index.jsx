import React, { memo } from 'react'
import Center from './c-cpns/header-center'
import Left from './c-cpns/header-left'
import Right from './c-cpns/header-right'
import { HeaderWrapper } from './style'
const index = memo(() => {
  return (
    <HeaderWrapper>
      <Left></Left>
      <Center></Center>
      <Right></Right>
    </HeaderWrapper>
  )
})

export default index