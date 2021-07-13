import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectuser } from '../features/userSlice';

const Sidebar = () => {

    const user = useSelector(selectuser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1549119246-cf57ef8a17b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                <Avatar className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">100</p>
                </div>

                <div className="sidebar__stat">
                    <p>View on your Profile</p>
                    <p className="sidebar__statNumber">1000</p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem('React Js')}
                {recentItem('JavaScript')}
                {recentItem('HTML')}
                {recentItem('CSS')}
                {recentItem('Web Developing')}
            </div>
        </div>
    );
}

export default Sidebar;
