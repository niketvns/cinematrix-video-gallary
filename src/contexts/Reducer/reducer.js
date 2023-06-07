export const reducerFunction = (state, action) => {
    switch (action.type) {
        case "fetch-videos":
            return {
                ...state, videos: action.payload
            };
        case "product-loading":
            return {
                ...state, isProductLoading: action.payload
            };
        default:
            return state;
    }
}

export const initialValue = {
    isProductLoading: true,
    loginToken: null,
    userDetails: null,
    videos: [],
    likedArray: [],
    watchlaterArray: [],
    playlistsArray: []
}