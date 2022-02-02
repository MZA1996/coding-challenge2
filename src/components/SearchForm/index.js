import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getResult } from '../../actions/index';

function SearchForm({ getResult }) {

    const dispatch = useDispatch();

    const [ username, setUsername ] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        // getResult(username);
        dispatch(getResult(username));
        setUsername(" ")
    }

    const updateInput = e => {
        const input = e.target.value 
        setUsername(input)
    }


    return (
        <form aria-label="search" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input value={username} onChange={updateInput} type="text" />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
