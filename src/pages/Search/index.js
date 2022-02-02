import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result } from '../../components/index';
import { getResult } from '../../actions/index';

function Search(){

    const result = useSelector(state => state.result);
    const repos = useSelector(state => state.repos);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)

    const dispatch = useDispatch();
    
    const search = searchTerm => dispatch(getResult(searchTerm));

    const renderResult = () => loading ? <p>Loading . . .</p> : <Result result={result}/>


    return (
        <div id="search">
            Where do you want to search?
            <SearchForm getResult={search}/>

            <h1>{repos}</h1>

            { error ? <p>Oops there's been an error! {error}</p> : renderResult() }   
            
        </div>
    );

}

export default Search;
