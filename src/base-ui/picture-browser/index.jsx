import IconClose from '@/assets/svg/icon_close'
import IconLeftArrow from '@/assets/svg/icon_left_arrow'
import IconRightArrow from '@/assets/svg/icon_right_arrow'
import PropTypes from 'prop-types'
import { CSSTransition,SwitchTransition } from 'react-transition-group'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import TriangleBottom from '@/assets/svg/icon_triangle_bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import TriangleTop from '@/assets/svg/Icon_triangle_top'
const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClice } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true)
  const [showList,setShowList] = useState(true)
  // 当图片浏览器展示出来时，让滚动功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      // 图片浏览器消失时，恢复滚动
      document.body.style.overflow ='auto'
    }
  }, [])
  /* 事件监听的逻辑 */
  function closeHandle() {
    if(closeClice) closeClice();
  }
  function controlHandle(isNext) {
    let newIndex = isNext ? currentIndex + 1 :currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }
  function itemClickHandle(index) {
    index > currentIndex ? setIsNext(true) : setIsNext(false);
    setCurrentIndex(index)
  }
  return (
    <BrowserWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeHandle}>
          <IconClose></IconClose>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlHandle(false)}>
            <IconLeftArrow width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlHandle(true)}>
            <IconRightArrow width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{ pictureUrls.length}:</span>
              <span>room 图片{ currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e=>setShowList(!showList)}>
              <span>{ showList?'影藏':'显示'}照片列表</span>
              {showList?<TriangleBottom />:<TriangleTop/>}
            </div>
          </div>
          <div className="list" style={{height:showList?'67px':'0'}}>
            <Indicator selectIndex={ currentIndex }>
              {pictureUrls.map((item,index) => {
                return (
                  <div className={classNames('item', { active: index === currentIndex })} key={item} onClick={ e=> itemClickHandle(index)}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
})

PictureBrowser.propTypes = {
  pictureUrls:PropTypes.array
}

export default PictureBrowser