import React, { PureComponent } from 'react';

import { Task } from "./Task";

export class TaskList extends PureComponent {

    constructor(props){
        super(props);
    }

    render() {
        return <div className="tasks-list">
            {   this.props.tasks &&
                this.props.tasks.map((item) => {
                    return <Task data={item} key={item.key} />
                })
            }
        </div>
    }
}