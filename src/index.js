import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//渲染Dom到root里
ReactDOM.render(<h1>hello world</h1>, document.getElementById('root'));


serviceWorker.unregister();
