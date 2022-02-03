import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from '../SearchForm';
import { getUser } from '../actions';

function SearchUser() {
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