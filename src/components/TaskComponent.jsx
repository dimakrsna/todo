import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeTaskAction } from "../store/actions/closeTaskAction";
import { taskEditAction } from "../store/actions/formEditActions";
import { formTypeAction } from "../store/actions/formTypeActions";
import { removeProjectNameFromSelectAction } from "../store/actions/removeProjectNameFromSelectAction";

class Task extends Component {

    state = {
        isDescrOpen: false
    }

    closeTask(key, projectName){
        this.props.dispatch(closeTaskAction(key));
        this.props.dispatch(removeProjectNameFromSelectAction(projectName));
    }

    editTask(){
        this.props.dispatch(taskEditAction(this.props.data));
        this.props.dispatch(formTypeAction('edit'))
    }

    toggleDescription(){
        this.setState({
            isDescrOpen: !this.state.isDescrOpen
        })
    }

    render(){
        let { priority, key, title, projectName, description } = this.props.data;

        return <section className={`task task--${priority}`} key={key}>
            <h2 className="task__title">{title}</h2>
            <div className="task__info">
                <div className="project">Проект: <span className="project__name">{projectName}</span></div>
                <div className="priority">Приоритет: <span className="priority__num">{priority}</span></div>
            </div>
            <div className="task__descr">{ (this.state.isDescrOpen) ? description : "" }</div>
            <div className="btns-wrap">
                <button className="btn" onClick={ ()=> {this.editTask()} }>Изменить</button>
                <button className="btn" onClick={ () => {this.closeTask(key, projectName)} }>Закрыть</button>
                <button className="btn" onClick={ () => {this.toggleDescription()} }>
                    { (!this.state.isDescrOpen) ? "Развернуть" : "Свернуть" }
                </button>
            </div>
        </section>
    }
}

export default connect()(Task)