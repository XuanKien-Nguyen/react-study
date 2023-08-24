import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import Layout from './layouts/Layout';

const root = ReactDOM.creatRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <layout>
            <App />
        </layout>
    </BrowserRouter>
);
reportWebVitals();
