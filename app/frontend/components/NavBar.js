import React,{ useState } from 'react';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const NavBar = () => {
   
    // If the user is singed in
    const ShowToDos = () => {
        if(true){
            return(
                <>
                <Link to="/CreateToDo">
                    <h4>Create To Do</h4>
                </Link>

                <Link to="/ViewToDos">
                    <h4>View To Dos</h4>
                </Link>
                </>
            )
        }else{
            return(
                <>
                </>
            )
        }
    }

    const ShowUser = () =>{
        if(true){
            return(
                <div className="rightNav">
                    <Link to="/LogIn">
                        <h4>Log in</h4>
                    </Link>

                    <Link to="/SignUp">
                        <h4>Sign up</h4>
                    </Link>
                </div>
            )
        }else{
            return(
                <div className="rightNav">
                    <Link to="/LogOut"><h4>Log out</h4></Link>
                </div>
            )
        }
    }

    // main stuff
    return(
    <nav>
        <div className="leftNav">

            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <Link to="/">
                <h4>Home</h4>
            </Link>

            <Link to="/AboutUs">
                <h4>About Us</h4>
            </Link>

            <ShowToDos/>
        </div>
        
        <ShowUser/>
    </nav>
)}

export default NavBar