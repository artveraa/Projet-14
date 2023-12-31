import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employees from "./Pages/Employees/Employees";
import {Provider} from "react-redux";
import {store} from "./redux/redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <Routes>
                  <Route path="/" element={<App/>}/>
                  <Route path="/employees" element={<Employees/>}/>
                    <Route path="*" element={<h1>Not Found</h1>}/>
              </Routes>
          </Router>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

