const initState = { username: "", userInfo: "", repos: [], loading: false, error: '' };

const searchReducer = (state=initState, action) => {
    switch(action.type){
        //First load the username
        case 'SEARCH':
            return { ...state, username: action.payload, loading: true }
        // Then load results
        case 'LOAD_SEARCH':
            return { ...state, repos: action.payload.userRepos, userInfo: action.payload.userInfo, loading: false, error: false }
        // Load Error, clean everything
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false, username: '', repos: [], userInfo: '' }
        default:
            return state
    };
};

export default searchReducer;