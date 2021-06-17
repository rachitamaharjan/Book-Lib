const initialState = {
    bookdata: [],
    token: '',
    username: '',
    is_admin: null
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SAVE_BOOK_DATA':
            return { ...state, bookdata: action.payload }

        case 'ADD_TOKEN':
            return { ...state, token: action.payload }

        case 'ADD_USERNAME':
            return { ...state, username: action.payload }

        case 'ADD_ADMIN_INFO':
            return { ...state, is_admin: action.payload }

        default:
            return state;
    }
}



