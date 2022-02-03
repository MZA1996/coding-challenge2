import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from '../SearchForm/index';
import getUser from '../actions/index';

function SearchUser() {

    const username = useSelector(state => state.username);
    const dispatch = useDispatch();

    const search = searchTerm => {
        dispatch(getUser(searchTerm));
    };

    return (
        <div id="searchUser">
            <SearchForm getUser={search} />
        </div>
    )
};


export default SearchUser;