import React, { memo } from 'react'
import { FooterWrapper } from './style'
import {data} from "./data"
const AppFooter = memo(() => {
  return <FooterWrapper>
    <footer className='footer'>
      {data.map((item,index) => {
        return <div key={index}>
          <h4 className='title'>{item.title}</h4>
          <ul className='links'>
            {item.link.map((link, index) => {
              return <li className='item'><a href="javascript;">{ link }</a></li>
            })}
          </ul>
        </div>
      })}
    </footer>
  </FooterWrapper>;
})

export default AppFooter;