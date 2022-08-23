import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Home from "./components/Home";
import {RootState} from './reducers/RootReducer'
import Login from "./components/Login/Login";
import {Switch, Route, Redirect} from "react-router";
import {ConnectedRouter} from 'connected-react-router'
import {BrowserRouter } from "react-router-dom";
import {ProtectedRoute} from './ProtectedRoute'
import HeaderAppBar from './HeaderBar'





function App() {
    const isAuth = useSelector((state: RootState) =>state.auth.isAuthencated)
    
    // const location = useSelector((state: RootStore)=>state.router)
    // const [isAuth, setIsauth]=useState(false)
// console.log('STATE', isAuth)
// console.log('LOCALS-STORIG', localStorage.getItem("authToken"))
    console.log(11111111, window)
  return (
      <>
      <BrowserRouter>
          {localStorage.getItem("authToken")?<HeaderAppBar/>: ''}
          <Switch>
              <Route exact path="/"
                     render={props => {
                         if (localStorage.getItem("authToken")) {
                             return <Home />;
                         } else {
                             return (
                                 <Redirect
                                     to={{
                                         pathname: "/login",
                                         state: {
                                             from: props.location
                                         }
                                     }}
                                 />
                             );
                         }
                     }}
              />
              <Route path="/login"
                  render={props => {
                      if (!localStorage.getItem("authToken")) {
                          return <Login />;
                      } else {
                          return (
                              <Redirect
                                  to={{
                                      pathname: "/",
                                      state: {
                                          from: props.location
                                      }
                                  }}
                              />
                          );
                      }
                  }}
              />
              <Route path='*' render={()=><div> 404 Page Not Found</div>}></Route>
          </Switch>
      </BrowserRouter>
      </>
  );
}

export default App;
