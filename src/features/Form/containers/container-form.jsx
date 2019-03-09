import React, { Component } from 'react';
import { connect } from 'react-redux';

import memoizeSelector from '../../../store/selectors/momoizeSelector';

import { formTypeAction } from '../../../store/actions/formTypeActions';
import { taskAddAction } from "../../../store/actions/taskAddAction";
import { addProjectNameToSelectAction } from "../../../store/actions/addProjectNameToSelectAction";
import { taskEditAction } from "../../../store/actions/taskEditAction";
import { removeProjectNameFromSelectAction } from "../../../store/actions/removeProjectNameFromSelectAction";

import FormComponent from '../components/component-form';

class Form extends Component {

    generateKey() {
        return new Date().getTime();
    }

    getFormRef = (elem) => {
        this._form = elem;
    }

    cancelForm = (event) => {
        event.preventDefault();
        this.props.dispatch(formTypeAction(''));
    }

    sendData = (event) => {
        event.preventDefault();

        let { dispatch } = this.props;

        let form = this._form,
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

        return <FormComponent 
            editFormData={editFormData}
            formType={formType}
            sendData={this.sendData}
            cancelForm={this.cancelForm}
            getFormRef={this.getFormRef}
        />
    }
}

const mapStateToProps = (state) => {
    return memoizeSelector({
        editFormData: state.editFormData,
        formType: state.formType
    });
}

export default connect(mapStateToProps)(Form);