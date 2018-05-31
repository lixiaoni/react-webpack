import React from 'react';
import ReactDOM from 'react-dom';
import Index from './views/Index';
//import Mock from './mockajax/index';
process.env.NODE_ENV === 'development' && require('./mockajax/index')


ReactDOM.render(<Index/>, document.getElementById('app'));
