import { createStore, combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { projectNamesSelectReducer } from './projectNamesSelectReducer';
import { formTypeReducer } from './formTypeReducer';
import { taskReducer } from "./taskReducer";
import { taskEditerDataReducer } from "./taskEditerDataReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    projectNamesSelect: projectNamesSelectReducer,
    formType: formTypeReducer,
    tasks: taskReducer,
    editFormValues: taskEditerDataReducer
})

export const store = createStore(rootReducer);


let setLocalStore = function () {

    store.subscribe(() => {
        localStorage.setItem('savedState', JSON.stringify(store.getState()));
    })
}

setLocalStore();
