import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from "../../header/header";
import Login from "../../login/login";
import Book from "../books/books";
import MyCart from "../cart/cart";
import Dashboard from "../dashboard/dashboard";
import Lander from "../pages/lander";
import Shopping from "../shopping/shopping";
import Signup from "../signup/signup";
import Wishlist from "../wishlist/wishlist";

function RouterOne(){
    return (
        <div>
            <Router>
            <Routes>
                <Route exact path = '/' element = {<Lander />} />
                <Route exact path = '/login' element = {<Login />} />
                <Route  path = '/Signup' element = {<Signup />} />
                <Route  path = '/dashboard' element = {<Dashboard />} />
                <Route  path = '/mycart' element = {<MyCart />} />
                <Route  path = '/shopping' element = {<Shopping />} />
                <Route  path = '/wishlist' element = {<Wishlist />} />
                <Route  path = '/book' element = {<Book />} />
                <Route  path = '/header' element = {<Header />} />

            </Routes>
            </Router>
        </div>
    )
}
export default RouterOne