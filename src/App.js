import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed';
import Widgets from './component/Widgets';
import { login, logout, selectuser } from './features/userSlice';
import Login from './component/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectuser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {

      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.name,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // user logged out
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />
      {
        !user ? (
          <Login />
        ) : (
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          )}
    </div>
  );
}

export default App;
