import React, { Component } from 'react';

import { TaskList } from './TaskList';
import { Filter } from './Filter';
import { Form } from './Form';

import { store } from "../store/reducers/rootReducer";

export class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <main className="veiwport">
            <h1 className="h1">Todo:</h1>
            <TaskList data={store.getState()}/>
            <Filter />
            { store.getState().formType.type == 'new' && <Form /> }
        </main>
    }
}

