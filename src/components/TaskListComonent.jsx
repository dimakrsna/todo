import React from 'react';
import { connect } from 'react-redux';

import TaskComponent from "./TaskComponent";

const TaskList = (props) => {
    let { tasks, filter } = props;

    if (filter.byProjectName && filter.byProjectName != 'Все') {
        return <div className="tasks-list">
            {tasks.map((item) => {
                    if (item.projectName == filter.byProjectName) {
                        return <TaskComponent data={item} key={item.key} />;
                    }
                })}
        </div>
    } else {
        return <div className="tasks-list">{
            tasks && tasks.map((item) => {
                return <TaskComponent data={item} key={item.key} />
            })
        }</div>
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filter
    }
};

export default connect(mapStateToProps)(TaskList);