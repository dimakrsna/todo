import React, { Component } from 'react';

import { TaskList } from './TaskList';
import { Filter } from './Filter';
import { Form } from './Form';

import { testData } from "../store/testData";

export class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <main className="veiwport">
            <h1 className="h1">Todo:</h1>
            <TaskList />
            <Filter />
            <Form />
        </main>
    }
}

