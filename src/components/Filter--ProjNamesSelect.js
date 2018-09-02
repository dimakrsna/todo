import React, { Component } from 'react';
import { store } from "../store/reducers/rootReducer";

import { initialState } from "../store/initialState";
import { addProjectNameToSelectAction } from "../store/actions/addProjectNameToSelectAction";


initialState.projectNamesSelect.forEach((item) => {
    store.dispatch(addProjectNameToSelectAction(item))
})


export class ProjNamesSelect extends Component {

    constructor(props){
        super(props);

        if (this.props.namesList.length) {
            this.state = {
                namesList: this.props.namesList
            }
        } else {
            this.state = {
                namesList: store.getState().projectNamesSelect
            }
        }

        // this.state = (this.props.namesList.length) ? {namesList: this.props.namesList} :
        //     {namesList: store.getState().projectNamesSelect}
    }

    componentWillReceiveProps(newProps){
        this.setState(newProps)
    }

    render(){
        return <select className="select" name="" id="">
            {this.state.namesList.map((item, index) => {
                return <option value={item} key={`${index-56489461}`}>{item}</option>
            })}
        </select>
    }
}