import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './app/store';

const root = document.getElementById('app');

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);
