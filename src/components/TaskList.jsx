import React, {PureComponent} from 'react';

import {testData} from "../store/testData";

export class TaskList extends PureComponent {

    generateKey(index){
        return `${index}-${new Date().getTime()}`;
    }

    render() {
        return <div className="tasks-list">

            {
                testData.tasks.map((item, index) => {
                    return <section className={`task task--${item.priority}`} key={this.generateKey(index)}>
                        <h2 className="task__title">{item.title}</h2>
                        <div className="task__info">
                            <div className="project">Проект: <span className="project__name">{item.projectName}</span></div>
                            <div className="priority">Приоритет: <span className="priority__num">{item.priority}</span></div>
                        </div>
                        <div className="task__descr">{ (item.showDescription) ? item.description : "" }</div>
                        <div className="btns-wrap">
                            <button className="btn">Изменить</button>
                            <button className="btn">Закрыть</button>
                            <button className="btn">Развернуть</button>
                        </div>
                    </section>
                })
            }

        </div>
    }
}