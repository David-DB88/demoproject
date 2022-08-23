import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import Home from "./components/Home";
import {RootState} from './reducers/RootReducer'
import Login from "./components/Login/Login";
import {Switch, Route, Redirect} from "react-router";
import {BrowserRouter } from "react-router-dom";
import HeaderAppBar from './HeaderBar'





function App() {
    const authToken = useSelector((state: RootState) =>state.auth.authToken)
  return (
      <>
      <BrowserRouter>
          {localStorage.getItem("authToken")?<HeaderAppBar/>: ''}
          <Switch>
              <Route exact path="/"
                     render={props => {
                         if (authToken) {
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
                      if (!authToken) {
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
