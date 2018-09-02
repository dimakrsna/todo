export function projectNamesSelectReducer(state = {}, action){
    switch (action.type){
        case 'ADD_PROJECT_NAME_TO_SELECT':

            if(state.length && ( state.indexOf(action.payload) != -1 )){
                return [
                    ...state
                ];
            }

            return [
               ...state, action.payload
            ];
        case 'REMOVE_PROJECT_NAME_FROM_SELECT':

            let newState = state.filter(item => item != action.payload );

            return newState
    }

    return state;
}