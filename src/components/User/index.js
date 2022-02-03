import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'

const User = () => {
  
  const login = useSelector(state => state.username);
  const loading = useSelector(state => state.loading);
  const userInfo = useSelector(state => state.userInfo);

  return (
    <div className="user-frame">
      {
        !login ?
          <p/> :
          <div>{
              loading ?
                <h3>User info loading ... </h3>
                : <div className="user-info">
                    <hr/>
                    <h2>{userInfo.name} <a href={userInfo.html_url}>({userInfo.login})</a></h2>
                    <img src={userInfo.avatar_url}/> 
                    <p className='uInfo'><b>Location:</b> {userInfo.location}</p>
                    <p className='uInfo'><b>Public repos:</b> {userInfo.public_repos}</p>
                    <p className='uInfo'><b>Followers:</b> {userInfo.followers} || <b>Following</b>: {userInfo.following}</p>
                  </div>
                }
          </div>   
      }
    </div>);

};

export default User;
