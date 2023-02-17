import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayOut from "./components/LayOut/LayOut";
import {Provider} from "react-redux";
import {store} from "./redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <LayOut>
              <Provider store={store}>
                  <App />
              </Provider>
          </LayOut>
      </BrowserRouter>
  </React.StrictMode>
);

