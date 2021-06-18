const initialState = {
    bookdata: [],
    favBookdata: [],
    token: '',
    username: '',
    is_admin: null,
    new_book: null
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SAVE_BOOK_DATA':
            return { ...state, bookdata: action.payload }

        case 'SAVE_FAV_BOOKS':
            return { ...state, favBookdata: action.payload }

        case 'ADD_TOKEN':
            return { ...state, token: action.payload }

        case 'ADD_USERNAME':
            return { ...state, username: action.payload }

        case 'ADD_ADMIN_INFO':
            return { ...state, is_admin: action.payload }

        case 'ADD_BOOK':
            return { ...state, new_book: action.payload }

        default:
            return state;
    }
}



