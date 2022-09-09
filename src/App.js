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
function App() {
  return (
    <div className="App">
      {/* < Login /> */}
      {/* < Signup /> */}
      {/* < Lander /> */}
      {/* < Header /> */}
      {/* < Book /> */}
      {/* < Dashboard />  */}
       < MyCart />
      {/* <BookDetails /> */}
      {/* < CartOrder /> */}
      {/* < OrderDetails/> */}
    </div>
  );
}

export default App;
