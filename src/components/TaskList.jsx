import React, { Component } from 'react';

import { Task } from "./Task";

export class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    componentWillReceiveProps(newProps){
        this.setState(newProps);

    }

    render() {
        let {tasks, filter} = this.state.data;

        if (filter.byProjectName && filter.byProjectName != 'Все') {
            return <div className="tasks-list">
                {
                    tasks.map((item) => {
                        if (item.projectName == filter.byProjectName) {
                            return <Task data={item} key={item.key}/>;
                        }
                    })
                }
            </div>
        }

        return <div className="tasks-list">
            {
                tasks && tasks.map((item) => {
                    return <Task data={item} key={item.key}/>
                })
            }
        </div>
    }
}