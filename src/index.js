import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//HMR 模块热替换,浏览器不用重新刷新
if (module.hot) {
    module.hot.accept();
  }
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
