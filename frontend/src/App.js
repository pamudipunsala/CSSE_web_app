import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import OrderList from './pages/OrdersList';
import EditOrder from './pages/EditOrder';

import Register from './pages/Register';
import SupRegister from './pages/SupRegister';
import ViewSuppliers from './pages/ViewSuppliers';
import EditSupplier from './pages/EditSupplier';

import MakeDeliveries from './pages/MakeDeliveries';
import ViewDeliveries from './pages/ViewDeliveries';
import EditDeliveries from './pages/EditDeliveries';

import MakePayments from './pages/MakePayments';
import ViewPayments from './pages/ViewPayments';
import EditPayments from './pages/EditPayments';
import PaymentsDetails from './pages/PaymentDetails';

import RequestDtl from './pages/RequestDtl';
import ViewRequests from './pages/ViewRequests';
import EditRequests from './pages/EditReqeusts';

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

      <Route path='/editSuppliers/:id' element={<EditSupplier/>}/>

      <Route path='/makedelivery' element={<MakeDeliveries/>}/>
      <Route path='/viewdelivery' element={<ViewDeliveries/>}/>
      <Route path='/editdelivery/:id' element={<EditDeliveries/>}/>

      <Route path='/makepayment' element={<MakePayments/>}/>
      <Route path='/viewpayment' element={<ViewPayments/>}/>
      <Route path='/editpayment/:id' element={<EditPayments/>}/>
      <Route path='/paymentdetails/:id' element={<PaymentsDetails/>}/>


      <Route path='/requests' element={<RequestDtl/>}/>
      <Route path='/viewreq' element={<ViewRequests/>}/>
      <Route path='/requests/update/:id' element={<EditRequests/>}/>

    </Routes>
  </Router>
  )};


  export default App;
