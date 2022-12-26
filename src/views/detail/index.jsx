import { memo } from 'react';
import DetailInfo from './c-cpns/detail-infos';
import DetailPicture from './c-cpns/detail-pictures';
import { DetailWrapper } from './style';
const index = memo(() => {
  return <DetailWrapper>
    <DetailPicture></DetailPicture>
    <DetailInfo></DetailInfo>
  </DetailWrapper>;
})
export default index