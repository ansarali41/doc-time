import React, { createContext, useState } from 'react';
import './App.css';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Booking from './components/Booking/Booking';
import NearestHospital from './components/NearestHospital/NearestHospital';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Progress from './components/Progress/Progress';
import Contact from './components/Contact/Contact';
import Helpline from './components/Helpline/Helpline';

export const UserContext = createContext();

function App() {
    const userDetails = localStorage.getItem('user');
    let parseUser = JSON.parse(userDetails);
    if (!parseUser) {
        parseUser = {};
    }

    const [loggedInUser, setLoggedInUser] = useState(parseUser);
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>

                    <PrivateRoute path="/booking/:locationName">
                        <Booking></Booking>
                    </PrivateRoute>

                    <Route path="/nearestHospital">
                        <NearestHospital></NearestHospital>
                    </Route>

                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/helpline">
                        <Helpline />
                    </Route>
                    <Route path="/progress">
                        <Progress></Progress>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>

                    <Route path="*">
                        <PageNotFound></PageNotFound>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
