import { memo, useEffect } from "react";
import DetailInfo from "./c-cpns/detail-infos";
import DetailPicture from "./c-cpns/detail-pictures";
import AppHeader from "@/components/app-header";
import { DetailWrapper } from "./style";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";
const index = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed:false}))
  },[dispatch])
  return (
    <DetailWrapper>
      <AppHeader />
      <DetailPicture></DetailPicture>
      <DetailInfo></DetailInfo>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
      <div>s</div>
    </DetailWrapper>
  );
});
export default index;
