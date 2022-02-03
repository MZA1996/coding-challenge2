const initState = { username: "", result: { userInfo: "", repos: [] }, loading: false, error: '' };

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, username: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, repos: action.payload.userRepos, userInfo: action.payload.userInfo, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false, username: '', repos: [], userInfo: '' };
        default:
            return state;
    };
};

export default searchReducer;