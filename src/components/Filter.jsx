import React, { PureComponent } from 'react';

import { store } from "../store/reducers/rootReducer";
import { priorityFilterAction, projectNameFilterAction } from './../store/actions/filterActions';
import { formTypeAction } from "../store/actions/formTypeActions";

// store.dispatch(priorityFilterAction(true));
// store.dispatch(projectNameFilterAction('test project name'));

export class Filter extends PureComponent {

    addNewTask(){
        store.dispatch(formTypeAction("new"));
    }

    render(){
        return <aside className="filter">
                <button className="btn btn--filter" onClick={()=> {this.addNewTask()}}>Новая задача</button>
                <span className="check">
                    <input type="checkbox" id="cb-priority" className="check__box" />
                    <label htmlFor="cb-priority" className="check__text">По приоритету</label>
                </span>
                <select className="select" name="" id="">
                    <option value="">adasdad</option>
                    <option value="">adasdad</option>
                    <option value="">adasdad</option>
                </select>
            </aside>
    }
}
