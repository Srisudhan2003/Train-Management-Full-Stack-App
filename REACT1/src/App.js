import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListTrainComponent from './components/ListTrainComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTrainComponent from './components/CreateTrainComponent'; 
import ViewTrainComponent from './components/ViewTrainComponent';
import Login from './components/entry/Login';
import SignUp  from './components/entry/SignUp'
function App() {
  
  
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/home" exact component = {ListTrainComponent}></Route>
                          <Route path = "/view-Train/Trains" exact component = {ListTrainComponent}></Route>
                          <Route path = "/Trains" component = {ListTrainComponent}></Route>
                          <Route path = "/add-Train/:id" component = {CreateTrainComponent}></Route>
                          <Route path = "/view-Train/:id" component = {ViewTrainComponent}></Route>
                          <Route path = "/signup" component = {SignUp}></Route>

                          {/* <Route path = "/update-Train/:id" component = {UpdateTrainComponent}></Route> */}
                    </Switch>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
    
  );
}

export default App;


