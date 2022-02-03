import React from 'react';
import Repos from '../Result/index';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const GitHubInfo = () => {
    const login = useSelector(state => state.username)
    const error = useSelector(state => state.error);
    const [selectedRepo, setRepo] = useState(null);

    const handleRepoSelect = (id) => {
        const selectedRepo = id
        setRepo(selectedRepo);
    }

    return (
        <section id='githubinfo'>
            {error ? <p>Oops there's been an error! {error}</p> :
                <div>
                    {/* <User login={login}/> */}
                    <Repos handleRepoSelect={handleRepoSelect} />
                    {/* <Repo id={selectedRepo}/> */}
                    </div>
                    }
        </section>
    );
};

export default GitHubInfo;