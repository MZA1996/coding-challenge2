import { useState } from 'react';
import { Button, TextField } from '@mui/material'

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
            {/* <input value={username} id="username" name="username" placeholder="Search GitHub user" onChange={updateInput} type="text" /> */}
            <TextField value={username} id="username" label="Username" onChange={updateInput} type="search" />
            <div></div>
            <Button variant="outlined" type="submit">Get info</Button>
            {/* <input type="submit" value="Get Info" /> */}
        </form>
    );
};

export default SearchForm;
