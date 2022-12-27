import React, { memo, useEffect } from "react";
import {useRoutes } from "react-router-dom";
import routes from "./router/index"
import AppFooter from "./components/app-footer"
import useScrollTop from "./hooks/useScrollTop";
const App = memo(() => {
  // 回到顶部的自定义hook
  useScrollTop();
  return (
    <div className="app">
      <div className="page">{ useRoutes(routes) }</div>
      <AppFooter />
    </div>
  );
});

export default App;
