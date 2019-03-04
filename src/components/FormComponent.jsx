import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formTypeAction } from '../store/actions/formTypeActions';
import { taskAddAction } from "../store/actions/taskAddAction";
import { addProjectNameToSelectAction } from "../store/actions/addProjectNameToSelectAction";
import { taskEditAction } from "../store/actions/taskEditAction";
import { removeProjectNameFromSelectAction } from "../store/actions/removeProjectNameFromSelectAction";


class Form extends Component {

    cancelForm(event) {
        event.preventDefault();
        this.props.dispatch(formTypeAction(''));
    }

    generateKey() {
        return new Date().getTime();
    }

    sendData(event) {
        event.preventDefault();

        let { dispatch } = this.props;

        let form = this.refs.mainForm,
            formLength = form.elements.length,
            data = {},
            i;

        for (i = 0; i < formLength; i++) {

            if (form.elements[i].name) {

                //validate form
                if (!form.elements[i].value) {
                    form.elements[i].style.borderColor = 'red';
                    form.elements[i].placeholder = 'Обязательное поле';
                    return false;
                }
                //end validate form

                if (form.elements[i].name == 'projectName') {
                    this.props.dispatch(addProjectNameToSelectAction(form.elements[i].value))
                }

                data[form.elements[i].name] = form.elements[i].value;
                form.elements[i].style.borderColor = '';
            }
        }
        
        let { formType } = this.props;

        if(formType == 'edit'){
            data.key = this.props.editFormData.key;
            let prevProjName = this.props.editFormData.projectName;

            dispatch(removeProjectNameFromSelectAction(prevProjName));
            dispatch(taskEditAction(data));
            dispatch(formTypeAction(''));
        } else if(formType == 'new') {
            data.key = this.generateKey();
            dispatch(taskAddAction(data));
            dispatch(formTypeAction(''));
        }
    }

    render() {
        let { editFormData, formType } = this.props;

        // console.log('render form', editFormData);

        if (formType != '') {
            return <div className="form-wrap clear">
                <form action="" className="form" ref="mainForm">
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
                            (event) => { this.sendData(event) }
                        }>Сохранить изменения</button>
                        <button className="btn btn--form" onClick={
                            (event) => { this.cancelForm(event) }
                        }>Отменить</button>
                    </div>
                </form>
            </div>
        } else return ''
    }
}


const mapStateToProps = (state) => {
    return {
        editFormData: state.editFormData,
        formType: state.formType
    }
}

export default connect(mapStateToProps)(Form);