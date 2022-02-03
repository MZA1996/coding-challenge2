import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';

const Repos = ({ handleRepoSelect }) => {
    const repos = useSelector(state => state.repos);
    const login = useSelector(state => state.username);
    const loading = useSelector(state => state.loading)

    return (
        <div className="repos-frame">
            {
                !login ?
                    <p/> :
                        <div>{
                            loading ?
                                <h3>Repo list loading...</h3>
                                : <div className="repos-list">
                                    <hr/>
                                    <h3>Repos:</h3>
                                    {repos.length === 0 ? <p>User doesn't have any repos</p> :
                                        repos.map(r => <p>{r.name}</p>
                                        )
                                    }
                                    <hr/>
                                </div>
                            }
                        </div>
            }
        </div>
    );
};

export default Repos;