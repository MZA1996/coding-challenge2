import axios from 'axios';

// arrow function that performs the dispatch
const loading = username => ({ type: 'SEARCH'/*'LOADING'*/, payload: username });

const uploadSearch = (userRepos, userInfo) => ({ 
    type: 'LOAD_SEARCH',
    payload: { userRepos: userRepos, userInfo: userInfo } 
});

const getUser = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const userRepos = await fetchUserRepos(searchTerm);
            const userInfo = await fetchUser(searchTerm);
            dispatch(uploadSearch(userRepos, userInfo));
        } catch (err) {
            console.warn(err/*.message*/);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};


// This will fetch the user repos data
const fetchUserRepos = async searchTerm => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}/repos`);
        return data;
    } catch(err) {
        throw new Error(err);
    }
};

const fetchUser = async searchTerm => {
    try {
        const { data, response } = await axios.get(`https://api.github.com/users/${searchTerm}`);
        return data;
    } catch(err) {
        throw new Error(err)
    }
};

export default getUser;