import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import VideoJ from './VideoJ';
import reportWebVitals from './reportWebVitals';
import InfiniteScroll from 'react-infinite-scroller';
import Drawer from '@material-ui/core/Drawer';

ReactDOM.render(
  <React.StrictMode>
    <Drawer />
    <VideoJ />
    <InfiniteScroll />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
