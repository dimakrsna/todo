import React, { Component } from 'react';

import { store } from "../store/reducers/rootReducer";
import { closeTaskAction } from "../store/actions/closeTaskAction";
import { removeProjectNameFromSelectAction } from "../store/actions/removeProjectNameFromSelectAction";
import { taskEditAction } from "../store/actions/formEditActions";
import { formTypeAction } from "../store/actions/formTypeActions";

export class Task extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDescrOpen: false
        }
    }

    closeTask(key, projectName){
        store.dispatch(closeTaskAction(key));
        store.dispatch(removeProjectNameFromSelectAction(projectName));
    }

    editTask(){
        store.dispatch(taskEditAction(this.props.data));
        store.dispatch(formTypeAction('edit'))
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