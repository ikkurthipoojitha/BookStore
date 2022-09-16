import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "../../login/login";
import MyCart from "../cart/cart";
import Dashboard from "../dashboard/dashboard";
import Shopping from "../shopping/shopping";
import Signup from "../signup/signup";

function RouterOne(){
    return (
        <div>
            <Router>
            <Routes>
                <Route exact path = '/' element = {<Login />} />
                <Route  path = '/Signup' element = {<Signup />} />
                <Route  path = '/dashboard' element = {<Dashboard />} />
                <Route  path = '/mycart' element = {<MyCart />} />
                <Route  path = '/shopping' element = {<Shopping />} />

            </Routes>
            </Router>
        </div>
    )
}
export default RouterOne