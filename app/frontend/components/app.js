import React from 'react';
import NavBar from './NavBar';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import "../styles/app.scss"
import Home from '../pages/Home'
import CreateToDo from '../pages/CreateToDo'
import AboutUs from '../pages/AboutUs'
import Login from '../pages/Login'
import LogOut from '../pages/LogOut'
import SignUp from '../pages/SignUp'
import ViewToDos from '../pages/ViewToDos'


const App = () => {

    return(
        <BrowserRouter>
            <div className="app">
                <NavBar></NavBar>
                <Switch>
                    <Route path="/CreateToDo" component={CreateToDo}/>
                    <Route path="/ViewToDos" component={ViewToDos}/>
                    <Route path="/LogIn" component={Login}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/LogOut" component={LogOut}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/AboutUs" component={AboutUs}/>
                </Switch>
                
            </div>
        </BrowserRouter>
    )
}

export default App;