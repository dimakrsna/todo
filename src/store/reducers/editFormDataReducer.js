export function editFormDataReducer(state = {}, action) {
    switch (action.type) {
        case 'TASK_EDIT_DATA':
            return action.payload;
        case 'CLEAN_EDIT_DATA':
        return {}
    }
    return state;
}