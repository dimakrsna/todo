export function formTypeReducer(state = {}, action) {
    switch (action.type) {
        case 'FORM_TYPE':
            return {
                ...state, type: action.payload
            };
    }

    return state;
}