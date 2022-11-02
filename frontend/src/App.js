import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import OrderList from './pages/OrdersList';
import EditOrder from './pages/EditOrder';

import Register from './pages/Register';

function App(){
  return(
  <Router>
  
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/orders' element={<OrderList/>}/>
      <Route path='/editorders/:id' element={<EditOrder/>}/>

      <Route path='/register' element={<Register/>}/>
    </Routes>
  </Router>
  )};


  export default App;
