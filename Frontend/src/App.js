import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarCmp from './mui component/NavBarCmp';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Products from './screen/Products'
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
    <NavBarCmp/>
    <Toaster position="top-right"
  reverseOrder={false}/>
   <Routes>
   <Route path='/' element={<Products/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
    </>
  );
}

export default App;
