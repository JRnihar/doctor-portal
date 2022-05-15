
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Login from './Pages/LogIn/Login';
import Footer from './Pages/Shared/Footer';
import Appoinment from './Pages/Appoinment/Appoinment';
import Singup from './Pages/LogIn/Singup';
import RequireAuth from './Pages/LogIn/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='appoinment' element={
          <RequireAuth>
            <Appoinment></Appoinment>
          </RequireAuth>
        }></Route>
        <Route path='singUp' element={<Singup></Singup>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
