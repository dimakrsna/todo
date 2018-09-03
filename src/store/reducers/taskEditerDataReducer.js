export function taskEditerDataReducer(state = {}, action) {
    switch (action.type) {
        case 'TASK_EDIT_DATA':
            return action.payload;
    }
    return state;
}