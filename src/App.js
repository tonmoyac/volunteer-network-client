import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import EventTask from './Components/EventTask/EventTask';
import NotFound from './Components/NotFound/NotFound';

export  const UserContext = createContext();
export  const EventContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [chooseEvent, setChooseEvent] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <EventContext.Provider value={[chooseEvent, setChooseEvent]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/eventTask">
              <EventTask></EventTask>
            </Route>
            <PrivateRoute path="/register">
              <Register></Register>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        </EventContext.Provider>
        </UserContext.Provider>
    </div>
  );
}

export default App;
