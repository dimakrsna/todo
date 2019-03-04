import React, { Component } from 'react';

import TaskListComonent from './TaskListComonent';
import FilterComponent from './FilterComponent';
import FormComponent from './FormComponent';

export class App extends Component {

    render() {
        return <main className="veiwport">
            <h1 className="h1">Todo:</h1>
            <TaskListComonent />
            <FilterComponent />
            <FormComponent />
        </main>
    }
}
