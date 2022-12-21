import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import {ViewWrapper} from "./style"
const ScrollView = memo((props) => {
  /* 定义内部状态 */
  const [showRight,setShowRight] = useState(false)
  const [showLeft, setshowLeft] = useState(false);
  const [index, setIndex] = useState(0)
  const totalDistanceRef = useRef(0);// 可滚动距离
  /* 组件渲染完，判断是否显示右侧按钮 */
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0)
  }, [props.children]);
  /* 事件处理 */
  function rightClickHandle() {
    const newIndex = index + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(${-newElOffsetLeft}px)`;
    setIndex(newIndex);
    // 是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newEl.offsetLeft);
  }
  return (
    <ViewWrapper>
      {/* {showLeft && <button>左</button>} */}
      <button>左</button>
      {showRight && <button onClick={rightClickHandle}>右</button>}
      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
})

ScrollView.propTypes = {}

export default ScrollView