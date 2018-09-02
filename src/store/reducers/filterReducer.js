export function filterReducer(state = {}, action){
    switch (action.type){
        case 'PRIORITY':
            return {
               ...state, byPriority: action.payload
            };

        case 'PROJECT_NAME_FILTER':
            return {
               ...state, byProjectName: action.payload
            };
    }

    return state;
}

