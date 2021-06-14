const initialState = {
    bookdata: ["ok", {i: "o"}],
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SAVE_BOOK_DATA':
            return { ...state, bookdata: action.payload }

        default:
            return state;
    }
}



