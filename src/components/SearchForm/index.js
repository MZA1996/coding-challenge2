import React, { useState } from 'react';

function SearchForm({ getUser }) {

    const [ username, setUsername ] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        getUser(username);
        setUsername("")
    }

    const updateInput = e => {
        const input = e.target.value 
        setUsername(input)
    }


    return (
        <form aria-label="form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input value={username} id="username" name="username" placeholder="Search Github user" onChange={updateInput} type="text" />
            <div></div>
            <input type="submit" value="Get Info" />
        </form>
    );
};

export default SearchForm;
