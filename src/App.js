import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Search } from './pages/index';

function App() {
    return (
        <div id="app">
            <main>
              <Routes>
                <Route path="/" element={<Search />}/>
              </Routes>
            </main>
        </div>
    )
}

export default App;