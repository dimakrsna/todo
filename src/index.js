import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import './scss/style.scss';
import { App } from './components/app';
import { store } from './store/reducers/rootReducer';


const mapStateToProps = (state) => {
    return {
        weather: state
    }
};

const MainComponent = connect(mapStateToProps)(App);

render(<Provider store={store}>
                    <MainComponent />
                </Provider>, document.getElementById("root"));
