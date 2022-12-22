import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {FooterWrapper} from "./style"
import IconMoreArrow from "@/assets/svg/icon_more_arrow"
import { useNavigate } from 'react-router-dom'
const SectionFooter = memo((props) => {
  const { name } = props
  let text = '显示全部'
  if (name) {
    text = `显示更多${name}房源`;
  }
  const navigate = useNavigate();
  function moreClickHandle() {
    navigate('/entire')
  }
  return (
    <FooterWrapper color={ name ? '#008489':'#000'}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{text}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name:PropTypes.string
}

export default SectionFooter