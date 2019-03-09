import React from 'react';

export default (props) => {
    let { editFormData, formType } = props;

    if (formType != '') {
        return <div className="form-wrap clear">
            <form action="" className="form" ref={(elem)=>(props.getFormRef(elem))}>
                <div className="form__item">
                    <label htmlFor="f-task" className="form__label">Название задачи: </label>
                    <input name="title" type="text" className="form__field" id="f-task"
                        defaultValue={(editFormData) ? editFormData.title : ''} />
                </div>
                <div className="form__item">
                    <label htmlFor="f-proj" className="form__label">Название проекта: </label>
                    <input name="projectName" type="text" className="form__field" id="f-proj"
                        defaultValue={(editFormData) ? editFormData.projectName : ''} />
                </div>
                <div className="form__item">
                    <label htmlFor="f-priority" className="form__label">Приоритет: </label>
                    <select className="form__field" name="priority" id="f-priority"
                        defaultValue={(editFormData) ? editFormData.priority : ''}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="form__item">
                    <label htmlFor="f-descr" className="form__label">Описание: </label>
                    <textarea name="description" type="text" className="form__field form__field--descr" id="f-descr"
                        defaultValue={(editFormData) ? editFormData.description : ''}></textarea>
                </div>
                <div className="btns-wrap">
                    <button className="btn btn--form" onClick={
                        (event) => { props.sendData(event) }
                    }>Сохранить изменения</button>
                    <button className="btn btn--form" onClick={
                        (event) => { props.cancelForm(event) }
                    }>Отменить</button>
                </div>
            </form>
        </div>
    } else return ''
}