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
        case "login":
            return {
                ...state,
                loginToken: action.payload.loginToken,
                userDetails: action.payload.userDetails,
                loginFormInput: {email: '', password: ''}
            };
        case "signup":
            return {
                ...state,
                loginToken: action.payload.loginToken,
                userDetails: action.payload.userDetails,
                signupFormInput: {firstName: '', lastName: '', email: '', password: ''}
            }
        case "logout":
            return {
                ...state, loginToken: null, userDetails: null, likedArray: [], historyArray: [], watchlaterArray: [], playlistsArray: []
            }
        case 'loginFormChange':
            return {
                ...state, loginFormInput: {...state.loginFormInput, [action.payload.name]: action.payload.value}
            }
        case 'signupFormChange':
            return {
                ...state, signupFormInput: {...state.signupFormInput, [action.payload.name]: action.payload.value}
            }
        case 'addToLike':
            return {
                ...state, likedArray: action.payload
            }
        case 'addToWatchLater':
            return {
                ...state, watchlaterArray: action.payload
            }
        case 'addToHistory':
            return {
                ...state, historyArray: action.payload
            }
        case 'addToPlaylist':
            return {
                ...state, playlistsArray: action.payload
            }
        default:
            return state;
    }
}

export const initialValue = {
    isProductLoading: true,
    loginToken: null,
    userDetails: null,
    loginFormInput: {email: '', password: ''},
    signupFormInput: {firstName: '', lastName: '', email: '', password: ''},
    videos: [],
    likedArray: [],
    watchlaterArray: [],
    playlistsArray: [],
    historyArray: []
}