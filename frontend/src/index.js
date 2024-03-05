import React from "react";
import App from "./App";
import ReacDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
ReacDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root'),
);