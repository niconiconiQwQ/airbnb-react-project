import React, { memo, useEffect, useState } from "react";
import Request from "@/services/";
const index = memo(() => {
  // 定义状态
  const [highScore,setHighScore] = useState({})
  // 网络请求
  useEffect(() => {
    Request.get({ url: '/home/highscore' }).then((res) => {
      setHighScore(res)
    })
  },[])
  return (
    <div>
      home
    </div>
  );
})

export default index