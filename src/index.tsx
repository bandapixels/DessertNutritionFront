import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App/App';
import {Provider} from "react-redux";
import store from './store/core/store';
import client from './apollo';
import {ApolloProvider} from '@apollo/client';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
