import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './styles.scss';

import Layout from './layouts/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
