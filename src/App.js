import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GitHubInfo from './components/GitHubInfo';
import SearchUser from './components/searchUser';

function App() {
    return (
        <div className="App">
            <h1>Welcome to GitHub search</h1>
            <SearchUser />
            <GitHubInfo />
        </div>
    )
}

export default App;