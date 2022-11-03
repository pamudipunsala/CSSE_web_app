
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react'
import '../index.css';


function EditPayments() {
   
    const { id } = useParams();
    const form = useRef();

    const [orderid, setorderid] = useState('');
    const [supplierid, setsupplierid] = useState('');
    const [sname, setsname] = useState('');
    const [accid, setaccid] = useState('');
    const [date, setdate] = useState('');
    const [amount, setamount] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:7000/payment/${id}`).then((res) => {
            
            const paymentDetail = res.data.existingPayment;
            console.log(paymentDetail)
            setorderid(paymentDetail.orderid)
            setsupplierid(paymentDetail.supplierid)
            setsname(paymentDetail.sname)
            setaccid(paymentDetail.accid)
            setdate(paymentDetail.date)
            setamount(paymentDetail.amount)
        })

    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const paymentlist = {
            orderid,
            supplierid,
            sname,
            accid,
            date,
            amount
            
        }
        
        axios.put(`http://localhost:7000/payment/update/${id}`, paymentlist)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
        
        alert("Payment Updated Successfully")
    
}


    return (

        <div>
            <br />
            <div className="editpayment">
                <div className="container">
                    <h1>Payment</h1>
                    <br/>
                    <form ref={form} onSubmit={handleSubmit} className="form1">

                        <label for="orderid"><b >Order ID :</b></label>
                        <input type="text"
                            className="form-control mb-2"
                            name="orderid"
                            disabled = "disabled"
                            value={orderid}
                            onChange={(e) => setorderid(e.target.value)}
                        /><br/>
                        

                        <label htmlFor="supplierid"><b>Supplier ID :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="supplierid"
                            disabled = "disabled"
                            value={supplierid}
                            onChange={(e) => setsupplierid(e.target.value)}
                             /><br/>
                             

                        <label htmlFor="sname"><b>Supplier Name :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="sname"
                            disabled = "disabled"
                            value={sname}
                            onChange={(e) => setsname(e.target.value)}
                             /><br/>
                             

                        <label htmlFor="accid"><b>Accountant ID :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="accid"
                            disabled = "disabled"
                            value={accid}
                            onChange={(e) => setaccid(e.target.value)}
                             /><br/>
                             

                        <label htmlFor="date"><b>Date :</b></label>
                        <input type="text"  
                            className="form-control mb-3"
                            name="date"
                            disabled = "disabled"
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                             /><br/>
                             

                        <label htmlFor="amount"><b>Amount :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="amount"
                            disabled = "disabled"
                            value={amount}
                            onChange={(e) => setamount(e.target.value)}
                             /><br/><br/>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPayments;
/*import React, {Component} from "react";
import axios from "axios";


export default class PaymentsDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            payments:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:7000/payment/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    payments:res.data.payments
                });
                console.log(this.state.payments);
            }
        });
    }
    render(){
        const {orderid,supplierid,sname,accid,date,amount} = this.state.payments;
      return(
        
        <div style ={{marginTop:'20px'}}>
           <h4>Booking ID = {orderid}</h4><br></br>
           

           <dl className="row">
               <dt className="col-sm-3">Supplier ID</dt>
               <dd className="col-sm-9">{supplierid}</dd>

               <dt className="col-sm-3">Supplier Name</dt>
               <dd className="col-sm-9">{sname}</dd>

               <dt className="col-sm-3">Accountant ID</dt>
               <dd className="col-sm-9">{accid}</dd>

               <dt className="col-sm-3">Date</dt>
               <dd className="col-sm-9">{date}</dd>

               <dt className="col-sm-3">Amount</dt>
               <dd className="col-sm-9">{amount}</dd>

           </dl>
  
        </div>
       
      )
   
    }
  }*/