import React, { Component } from 'react';
import { connect } from 'react-redux';

import { projectNameFilterAction } from "../../../store/actions/projectNameFilterAction";
import ProjectsSelectComponent from '../components/component-projects-select';

export class ProjNamesSelect extends Component {

    filtered = (value) => {
        this.props.dispatch(projectNameFilterAction(value));
    }

    render(){
        return <ProjectsSelectComponent projectsList={this.props.projectsList} filtered={this.filtered} />
    }
}

const mapStateToProps = (state) => {
    return {
        projectsList: state.projectsList
    };
}

export default connect(mapStateToProps)(ProjNamesSelect)