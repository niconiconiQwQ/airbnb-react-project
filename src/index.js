import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import App from '@/App';
import {ThemeProvider} from 'styled-components';
import theme from "./assets/theme"
// 引入初始化css
import "normalize.css";
import "./assets/css/index.less";
import 'antd/dist/antd.less';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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