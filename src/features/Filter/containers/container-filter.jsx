import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formTypeAction } from "../../../store/actions/formTypeActions";
import { cleanFormDataActions } from "../../../store/actions/cleanFormDataActions";

import FilterComponent from '../components/component-filter';

class Filter extends Component {
    addNewTask = () => {
        this.props.dispatch(cleanFormDataActions());
        this.props.dispatch(formTypeAction("new"));
    }

    render() {
        return <FilterComponent addNewTask={this.addNewTask} />
    }
}

export default connect()(Filter)
