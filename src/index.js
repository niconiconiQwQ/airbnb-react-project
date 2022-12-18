import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import App from '@/App';
// 引入初始化css
import "normalize.css";
import "./assets/css/index.less";
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback={<h2>loading</h2>}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </Provider>
);