export function filterReducer(state = {}, action){
    switch (action.type){
        case 'PROJECT_NAME':
            return {
               ...state, byPriority: action.payload
            };
        case 'PRIORITY':
            return {
               ...state, byProjectName: action.payload
            };
    }

    return state;
}