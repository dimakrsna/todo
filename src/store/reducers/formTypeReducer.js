export function formTypeReducer(state = "", action) {
    switch (action.type) {
        case 'FORM_TYPE':
            return action.payload
    }

    return state;
}