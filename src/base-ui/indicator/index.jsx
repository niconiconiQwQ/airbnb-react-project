import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";
const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex];
    // 获取 selectIndex 要滚动的距离
    const selectItemWidth = selectItemEl.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    // 应该移动的距离(未考虑特殊情况)
    let distance =
      selectItemEl.offsetLeft + selectItemWidth * 0.5 - contentWidth * 0.5;
    const contentScroll = contentRef.current.scrollWidth;
    // 下面要考虑左右两边的特殊情况；什么时候不需要移动
    // 如果 distance 小于零，则不需要移动；
    if (distance < 0) distance = 0;
    // 最多能移动的距离
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance;
    // 改变位置
    contentRef.current.style.transform = `translateX(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-list" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
