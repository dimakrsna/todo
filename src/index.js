import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './scss/style.scss';
import { App } from './components/app';
import { store } from './store/reducers/rootReducer';

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
