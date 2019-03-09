import React, { Component } from 'react';

import TaskListComonent from './Tasks/components/component-task-list';
import FilterContainer from './Filter/containers/container-filter';
import FormContainer from './Form/containers/container-form';

export class App extends Component {

    render() {
        return <main className="veiwport">
            <h1 className="h1">Todo:</h1>
            <TaskListComonent />
            <FilterContainer />
            <FormContainer />
        </main>
    }
}
