export function projectNameListReducer(state = {}, action){
    switch (action.type){
        case 'PROJECT_NAME_LIST':
            return {
               ...state, projectNameList: action.payload
            };
    }

    return state;
}