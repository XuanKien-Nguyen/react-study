import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import './styles.scss';

import Layout from './layouts/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

axios.defaults.baseURL = 'https://localhost:8080';

axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error)
});

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
        <BrowserRouter>
            <Layout>
                <App />
            </Layout>
        </BrowserRouter>
);
reportWebVitals();
