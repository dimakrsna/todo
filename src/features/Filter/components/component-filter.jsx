import React from 'react';
import  ProjectsSelectContainer  from '../containers/container-projects-select'

export default (props) => {
    return (
        <aside className="filter">
            <button className="btn btn--filter" onClick={() => { props.addNewTask() }}>Новая задача</button>
            <ProjectsSelectContainer />
        </aside>
    )
} 