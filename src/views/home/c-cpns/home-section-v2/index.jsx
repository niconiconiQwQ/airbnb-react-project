import PropTypes from 'prop-types'
import React, { memo,useCallback,useState } from 'react'
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer';
const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  // 数据转换
  const tabNames = infoData.dest_address?.map((item) => item.name);
  /* 定义自己的数据 */
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName);
  /* 事件处理函数 */
  const tabClickHandle = useCallback((name, index) => {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <div className="discount">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
        <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3%" />
        <SectionFooter name={ name } />
      </div>
    </SectionV2Wrapper>
  );
})

HomeSectionV2.propTypes = {
  infoData:PropTypes.object
};

export default HomeSectionV2;