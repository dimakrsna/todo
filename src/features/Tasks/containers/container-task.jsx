import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeTaskAction } from "../../../store/actions/closeTaskAction";
import { taskEditAction } from "../../../store/actions/formEditActions";
import { formTypeAction } from "../../../store/actions/formTypeActions";
import { removeProjectNameFromSelectAction } from "../../../store/actions/removeProjectNameFromSelectAction";

import TaskComponent from '../components/component-task';

class Task extends Component {

    state = {
        isDescrOpen: false
    }

    closeTask = (key, projectName) => {
        this.props.dispatch(closeTaskAction(key));
        this.props.dispatch(removeProjectNameFromSelectAction(projectName));
    }

    editTask = () => {
        this.props.dispatch(taskEditAction(this.props.data));
        this.props.dispatch(formTypeAction('edit'))
    }

    toggleDescription = () => {
        this.setState({
            isDescrOpen: !this.state.isDescrOpen
        })
    }

    render() {
        return <TaskComponent
            data={this.props.data}
            editTask={this.editTask}
            closeTask={this.closeTask}
            toggleDescription={this.toggleDescription}
            isDescrOpen={this.state.isDescrOpen}
        />
    }
}

export default connect()(Task)