import { initialState } from "../initialState";

export function taskReducer(state = initialState.tasks, action){

    switch (action.type){
        case 'ADD_TASK':
            return [
               ...state, {...action.payload}
            ];
        case 'CLOSE_TASK':
            return state.filter(
                (item) => item.key !== action.payload
            );
    }

    return state;
}