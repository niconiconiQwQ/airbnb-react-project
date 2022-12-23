import Indicator from "@/base-ui/indicator";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";
const Demo = memo(() => {
  const names = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"];
  const [index, setIndex] = useState(0);
  function clickHandle(isPrev) {
    let newIndex = isPrev ? index - 1 : index + 1;
    if (newIndex > names.length - 1) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = names.length - 1;
    }
    setIndex(newIndex)
    // console.log(newIndex,names[newIndex]);
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => clickHandle(true)}>上一个</button>
        <button onClick={(e) => clickHandle(false)}>下一个</button>
      </div>
      <div className="i-content">
        <Indicator selectIndex={ index }>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
