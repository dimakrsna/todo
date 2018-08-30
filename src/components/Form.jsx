import React, { PureComponent } from 'react';

export class Form extends PureComponent {

    render(){
        return <div className="form-wrap clear">
            <form action="" className="form">
                <div className="form__item">
                    <label htmlFor="f-task" className="form__label">Название задачи: </label>
                    <input type="text" className="form__field" id="f-task" />
                </div>
                <div className="form__item">
                    <label htmlFor="f-proj" className="form__label">Название проекта: </label>
                    <input type="text" className="form__field" id="f-proj" />
                </div>
                <div className="form__item">
                    <label htmlFor="f-priority" className="form__label">Приоритет: </label>
                    <select className="form__field" name="" id="f-priority">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>
                <div className="form__item">
                    <label htmlFor="f-descr" className="form__label">Описание: </label>
                    <textarea type="text" className="form__field form__field--descr" id="f-descr"></textarea>
                </div>
                <div className="btns-wrap">
                    <button className="btn btn--form">Сохранить изменения</button>
                    <button className="btn btn--form">Отменить</button>
                </div>
            </form>
        </div>
    }
}