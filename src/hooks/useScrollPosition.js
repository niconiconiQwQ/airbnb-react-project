import { useEffect, useState } from "react";
import { throttle } from "underscore";
export default function useScrollPosition() {
  //状态记录位置
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = throttle(function(){
    setScrollX(window.scrollX)
    setScrollY(window.scrollY)
  },100)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {scrollX,scrollY}
}
