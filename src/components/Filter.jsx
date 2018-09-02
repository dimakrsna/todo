import React, { PureComponent, Component } from 'react';

import { store } from "../store/reducers/rootReducer";
import { formTypeAction } from "../store/actions/formTypeActions";
import { ProjNamesSelect } from "./Filter--ProjNamesSelect";

export class Filter extends Component {

    addNewTask(){
        store.dispatch(formTypeAction("new"));
    }

    render(){
        return <aside className="filter">
                <button className="btn btn--filter" onClick={()=> {this.addNewTask()}}>Новая задача</button>
                {/*<span className="check">*/}
                    {/*<input type="checkbox" id="cb-priority" className="check__box" />*/}
                    {/*<label htmlFor="cb-priority" className="check__text">По приоритету</label>*/}
                {/*</span>*/}
               <ProjNamesSelect namesList={ store.getState().projectNamesSelect }/>
            </aside>
    }
}
