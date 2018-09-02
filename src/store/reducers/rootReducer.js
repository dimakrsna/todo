import { createStore, combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { projectNamesSelectReducer } from './projectNamesSelectReducer';
import { formTypeReducer } from './formTypeReducer';
import { taskReducer } from "./taskReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    projectNamesSelect: projectNamesSelectReducer,
    formType: formTypeReducer,
    tasks: taskReducer
})

export const store = createStore(rootReducer);


let setLocalStore = function () {

    store.subscribe(() => {
        localStorage.setItem('savedState', JSON.stringify(store.getState()));
    })
}

setLocalStore();
