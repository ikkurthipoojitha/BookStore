import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Signup from './components/signup/signup';
import Lander from './components/pages/lander';
import Header from './header/header';
import Book from './components/books/books';
import Dashboard from './components/dashboard/dashboard';
import BookDetails from './components/bookdetails/bookdetails';
import MyCart from './components/cart/cart';
import CartOrder from './components/cartorder/cartorder';
import OrderDetails from './components/orderdetails/orderdetails';
import Counter from './components/cart/counter';
import RouterOne from './components/router/router';
import Shopping from './components/shopping/shopping';

function App() {
  return (
    <div className="App">
       {/* < Login />  */}
      {/* < Signup /> */}
      {/* < Lander /> */}
      {/* < Header /> */}
      {/* < Book /> */}
       {/* < Dashboard />   */}
       {/* < MyCart />  */}
       {/* < Counter/> */}
      {/* <BookDetails /> */}
      {/* < CartOrder /> */}
      {/* < OrderDetails/> */}
       <RouterOne /> 
       {/* < Shopping/> */}
    </div>
  );
}

export default App;




// "email": "gorenityanand96@gmail.com",
// "password": "Nitya@123",
