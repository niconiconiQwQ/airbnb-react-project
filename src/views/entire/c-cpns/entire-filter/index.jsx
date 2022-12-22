import React, { memo, useState } from "react";
import filterData from "@/assets/data/filter_data.json";
import { FilterWrapper } from "./style";
import classNames from "classnames";
const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  function itemClickHandle(item) {
    const newItems = [...selectItems];
    if (selectItems.includes(item)) { // 移除
      newItems.splice(newItems.indexOf(item), 1);
    } else { // 添加
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
