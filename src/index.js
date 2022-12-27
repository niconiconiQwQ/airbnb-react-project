import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import App from '@/App';
import {ThemeProvider} from 'styled-components';
import theme from "./assets/theme"
// 引入初始化css
import "normalize.css";
import "antd/dist/antd.less";
import "./assets/css/index.less";
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 这里 Provider 要在 Suspense外面，否则异步加载的组件的会有问题 */
  <Provider store={store}>
    <Suspense fallback={<h2>loading</h2>}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Suspense>
  </Provider>
);