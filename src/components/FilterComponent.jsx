import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjNamesSelectComponent from "./ProjNamesSelectComponent";
import { formTypeAction } from "../store/actions/formTypeActions";
import { cleanFormDataActions } from "../store/actions/cleanFormDataActions";

class Filter extends Component {
    addNewTask() {
        this.props.dispatch(cleanFormDataActions());
        this.props.dispatch(formTypeAction("new"));
    }

    render() {
        return <aside className="filter">
            <button className="btn btn--filter" onClick={() => { this.addNewTask() }}>Новая задача</button>
            <ProjNamesSelectComponent />
        </aside>
    }
}

export default connect()(Filter)
