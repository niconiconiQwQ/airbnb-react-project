import React, { memo, useState } from "react";
import { PicturesWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";
const DetailPicture = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false);
  const { detailInfo } = useSelector((state) => {
    return {
      detailInfo: state.detail.detailInfo,
    };
  }, shallowEqual);
  function closeClick() {
    setShowBrowser(false);
  }
  function showClick() {
    setShowBrowser(true)
  }
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={showClick}>
            <img src={detailInfo.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item} onClick={ showClick }>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示图片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClice={closeClick}
        ></PictureBrowser>
      )}
    </PicturesWrapper>
  );
});

export default DetailPicture;
