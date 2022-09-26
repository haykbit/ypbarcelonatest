import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllContext from './context/AllContext';
import 'react-modal-video/scss/modal-video.scss';
import 'react-image-lightbox/style.css';
import './index.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import { LanguageProvider } from './context/LanguageContext';

ReactDOM.render(
  <React.Fragment>
    <LanguageProvider>
      <AllContext>
        <App />
      </AllContext>
    </LanguageProvider>
  </React.Fragment>,
  document.getElementById('root')
);
