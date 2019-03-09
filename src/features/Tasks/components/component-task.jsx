import React from 'react';

export default (props) => {
    let { priority, key, title, projectName, description, isDescrOpen } = props.data;

    return (
        <section className={`task task--${priority}`} key={key}>
            <h2 className="task__title">{title}</h2>
            <div className="task__info">
                <div className="project">Проект: <span className="project__name">{projectName}</span></div>
                <div className="priority">Приоритет: <span className="priority__num">{priority}</span></div>
            </div>
            <div className="task__descr">{(isDescrOpen) ? description : ""}</div>
            <div className="btns-wrap">
                <button className="btn" onClick={() => { props.editTask() }}>Изменить</button>
                <button className="btn" onClick={() => { props.closeTask(key, projectName) }}>Закрыть</button>
                <button className="btn" onClick={() => { props.toggleDescription() }}>
                    {(!isDescrOpen) ? "Развернуть" : "Свернуть"}
                </button>
            </div>
        </section>
    )
}