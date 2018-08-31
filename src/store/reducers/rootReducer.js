import { createStore, combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { projectNameListReducer } from './projectNameListReducer';
import { formTypeReducer } from './formTypeReducer';
import { taskReducer } from "./taskReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    projectNameList: projectNameListReducer,
    formType: formTypeReducer,
    tasks: taskReducer
})

export const store = createStore(rootReducer);