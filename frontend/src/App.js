import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import OrderList from './pages/OrdersList';
import EditOrder from './pages/EditOrder';

import Register from './pages/Register';
import SupRegister from './pages/SupRegister';
import ViewSuppliers from './pages/ViewSuppliers';

function App(){
  return(
  <Router>
  
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/orders' element={<OrderList/>}/>
      <Route path='/editorders/:id' element={<EditOrder/>}/>

      <Route path='/register' element={<Register/>}/>
      <Route path='/supregister' element={<SupRegister/>}/>
      <Route path='/suppliers' element={<ViewSuppliers/>} />
    </Routes>
  </Router>
  )};


  export default App;
