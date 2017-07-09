import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

import {App} from './components';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};

const store = createStore(reducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('root')
);

registerServiceWorker();