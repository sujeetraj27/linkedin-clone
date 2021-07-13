import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HeaderOption from '../component/HeaderOption'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectuser } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
    const dispatch = useDispatch();

    const user = useSelector(selectuser);

    const logoutofApp = () =>{
        dispatch(logout())
        auth.signOut();
        console.log("hello world")
    }
    return (
        <div className="header"> 
            <div className="header_left">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt=""></img>

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>

            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title={'Home'}/>
                <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'}/>
                <HeaderOption Icon={BusinessCenterIcon} title={'Jobs'}/>
                <HeaderOption Icon={ChatIcon} title={'Mesaging'}/>
                <HeaderOption Icon={NotificationsIcon} title={'Notifications'} />
                <HeaderOption avatar="https://media-exp3.licdn.com/dms/image/C4E03AQF0LzkwQE0Amw/profile-displayphoto-shrink_800_800/0/1517566645797?e=1631750400&v=beta&t=uCOehFbEMSYr8aw8qcROeIyrQtPUiB4UvFKxgdngqfQ" title="Me" onClick={logoutofApp}></HeaderOption>
                
               
            </div>
        </div>
    );
}

export default Header;
