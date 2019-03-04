import { createStore, combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { projectsListReducer } from './projectsListReducer';
import { formTypeReducer } from './formTypeReducer';
import { taskReducer } from "./taskReducer";
import { editFormDataReducer } from "./editFormDataReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    projectsList: projectsListReducer,
    formType: formTypeReducer,
    tasks: taskReducer,
    editFormData: editFormDataReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const store = createStore(rootReducer);

let setLocalStore = function () {
    store.subscribe(() => {
        localStorage.setItem('savedState', JSON.stringify(store.getState()));
    })
}

setLocalStore();
