import React from 'react';
import ReactDOM from 'react-dom';
import Index from './views/Index';
//import Mock from './mockajax/index';
process.env.MOCK && require('@/mockajax')


ReactDOM.render(<Index/>, document.getElementById('app'));
