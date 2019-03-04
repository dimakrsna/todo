import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectNameFilterAction } from "../store/actions/projectNameFilterAction";

export class ProjNamesSelect extends Component {

    filtered(value){
        this.props.dispatch(projectNameFilterAction(value));
    }

    render(){
        let { projectsList } = this.props;
        
        return <select className="select" onChange={(e)=> {this.filtered(e.target.value)}}>
            {projectsList.length && projectsList.map((item, index) => {
                return <option value={item} key={`${index-56489461}`}>{item}</option>
            })}
        </select>
    }
}

const mapStateToProps = (state) => {
    return {
        projectsList: state.projectsList
    };
}

export default connect(mapStateToProps)(ProjNamesSelect)