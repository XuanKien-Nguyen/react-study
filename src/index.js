import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from './reducers';

import './styles.scss';

import Layout from './layouts/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = createStore(appReducer);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <App />
            </Layout>
        </BrowserRouter>
    </Provider>
);
reportWebVitals();
