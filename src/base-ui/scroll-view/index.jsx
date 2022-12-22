import IconRightArrow from "@/assets/svg/icon_right_arrow";
import IconLeftArrow from "@/assets/svg/icon_left_arrow";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";
const ScrollView = memo((props) => {
  /* 定义内部状态 */
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setshowLeft] = useState(false);
  const [index, setIndex] = useState(0);
  const totalDistanceRef = useRef(0); // 可滚动距离
  /* 组件渲染完，判断是否显示右侧按钮 */
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);
  /* 点击左右的事件处理 */
  function clickHandle(isLeft) {
    const newIndex = isLeft ? index - 1 : index + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(${-newElOffsetLeft}px)`;
    setIndex(newIndex);
    // 是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newEl.offsetLeft);
    // 是否继续显示左边按钮
    setshowLeft(newElOffsetLeft > 0);
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => clickHandle(true)}>
          <IconLeftArrow />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={(e) => clickHandle(false)}>
          <IconRightArrow />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});
export default ScrollView;
