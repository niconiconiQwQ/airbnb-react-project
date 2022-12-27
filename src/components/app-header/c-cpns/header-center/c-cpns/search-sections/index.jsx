import PropTypes from "prop-types";
import React, { memo } from "react";
import { SearchWrapper } from "./style";

const SearchSections = memo((props) => {
  const { searchInfos } = props;
  return (
    <SearchWrapper>
      {searchInfos.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            { index !== searchInfos.length -1 &&<div className="divider"></div>}
          </div>
        );
      })}
    </SearchWrapper>
  );
});

SearchSections.propTypes = {};

export default SearchSections;
