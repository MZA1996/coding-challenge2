import React from 'react';
import { useSelector } from 'react-redux';


const Repo = ({id}) => {
  const userInfo = useSelector(state => state.userInfo);
  const repos = useSelector(state => state.repos);

  const repo = repos.filter(r => {
    return r.id === id;
  })

  if (repo.length===0) {
    id = 0;
  } 

  return (
    <div className="repo-frame">
       {
        !id ?
          <p/> :
            <div className="repo-info">
              <h3>Repo {repo[0].name}:</h3>
              <p><b>Visibility:</b> {repo[0].visibility} </p>
              <p><b>Language:</b> {repo[0].language} </p>
              <p><b>Watchers:</b> {repo[0].watchers_count} </p>
              <p><b>Forks:</b> {repo[0].forks} </p>
              <p><b>Stargazers:</b> {repo[0].stargazers_count} </p>
              <p><b>Open issues:</b> {repo[0].open_issues_count} </p>
              <hr/>
            </div>
        }
    </div>);
};

export default Repo;
