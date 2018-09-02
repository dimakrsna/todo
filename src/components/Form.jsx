import React, { PureComponent } from 'react';

import { store } from "../store/reducers/rootReducer";
import { formTypeAction } from './../store/actions/formTypeActions';
import { taskAction } from "../store/actions/taskAction";
import { addProjectNameToSelectAction } from "../store/actions/addProjectNameToSelectAction";

export class Form extends PureComponent {
    constructor(props){
        super(props);
    }

    cancelForm(event){
        event.preventDefault();
        store.dispatch(formTypeAction(''));
    }

    generateKey(){
        return new Date().getTime();
    }

    sendData(event){
        event.preventDefault();

        let form = this.refs.mainForm,
            formLength = form.elements.length,
            data = {},
            i;

        for(i = 0; i < formLength; i++){

            if(form.elements[i].name){

                //validate form
                if(!form.elements[i].value){
                    form.elements[i].style.borderColor = 'red';
                    form.elements[i].placeholder = 'Обязательное поле';
                    return false;
                }
                //end validate form


                if(form.elements[i].name == 'projectName'){
                    store.dispatch(addProjectNameToSelectAction(form.elements[i].value))
                }

                data[form.elements[i].name] = form.elements[i].value;
                form.elements[i].style.borderColor = '';
            }
        }

        data.key = this.generateKey();
        store.dispatch(taskAction(data));
        store.dispatch(formTypeAction(''));
    }

    render(){
        return <div className="form-wrap clear">
            <form action="" className="form" ref="mainForm">
                <div className="form__item">
                    <label htmlFor="f-task" className="form__label">Название задачи: </label>
                    <input name="title" type="text" className="form__field" id="f-task" />
                </div>
                <div className="form__item">
                    <label htmlFor="f-proj" className="form__label">Название проекта: </label>
                    <input name="projectName" type="text" className="form__field" id="f-proj" />
                </div>
                <div className="form__item">
                    <label htmlFor="f-priority" className="form__label">Приоритет: </label>
                    <select className="form__field" name="priority" id="f-priority">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="form__item">
                    <label htmlFor="f-descr" className="form__label">Описание: </label>
                    <textarea name="description" type="text" className="form__field form__field--descr" id="f-descr"></textarea>
                </div>
                <div className="btns-wrap">
                    <button className="btn btn--form" onClick={
                        (event)=> {this.sendData(event)}
                    }>Сохранить изменения</button>
                    <button className="btn btn--form" onClick={
                        (event) => {this.cancelForm(event)}
                    }>Отменить</button>
                </div>
            </form>
        </div>
    }
}