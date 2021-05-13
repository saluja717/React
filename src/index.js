import React from 'react';
import ReactDom from 'react-dom';
import Main from './Main';
import {BrowserRouter} from 'react-router-dom'
ReactDom.render(
  <>
  <BrowserRouter>
    <Main/>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);