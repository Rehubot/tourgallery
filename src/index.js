import React from 'react';
import ReactDOM from 'react-dom';
import ScriptTag from 'react-script-tag';


import App from './components/App';

import './assets/styles/style.sass';
import './assets/styles/animate.css';
import './assets/styles/bootstrap.css';
import './assets/styles/fancybox.min.css';
import './assets/styles/style.css';

// import './assets/styles/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
