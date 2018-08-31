import React, { PureComponent } from 'react';

import { store } from "../store/reducers/rootReducer";
import { closeTaskAction } from "../store/actions/closeTaskAction";
import { toggleTaskDescriptionAction } from "../store/actions/toggleTaskDescriptionAction";

export class Task extends PureComponent {

    constructor(props){
        super(props);
    }

    closeTask(key){
        store.dispatch(closeTaskAction(key));
    }

    toggleDescription(key){
        console.log(store.getState())
        store.dispatch(toggleTaskDescriptionAction(key))
        console.log(store.getState())
    }

    render(){
        let { priority, key, title, projectName, showDescription, description } = this.props.data;

        return <section className={`task task--${priority}`} key={key}>
            <h2 className="task__title">{title}</h2>
            <div className="task__info">
                <div className="project">Проект: <span className="project__name">{projectName}</span></div>
                <div className="priority">Приоритет: <span className="priority__num">{priority}</span></div>
            </div>
            <div className="task__descr">{ (showDescription) ? description : "" }</div>
            <div className="btns-wrap">
                <button className="btn">Изменить</button>
                <button className="btn" onClick={ () => {this.closeTask(key)} }>Закрыть</button>
                <button className="btn" onClick={ () => {this.toggleDescription(key)} }>Развернуть</button>
            </div>
        </section>
    }

}