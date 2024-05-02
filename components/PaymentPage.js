"use client";
import React, {useEffect, useState} from "react";
import Script from "next/script";
import { initiate } from "@/actions/useractions";
import { fetchpayments, fetchuser } from "@/actions/useractions";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

const PaymentPage = ({username}) => {
     const [paymentform, setpaymentform] = useState({name: "", message: "", amount: ""});
     const [currentUser, setCurrentUser] = useState({});
    const [payments, setPayments] = useState([]);
    const searchParams=useSearchParams();
    const router=useRouter();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
      if(searchParams.get("paymentdone")=="true"){
      toast('Thanks for your donation!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      }
      router.push(`/${username}`)
    }, []);

    const handleChange=(e)=>{
        setpaymentform({...paymentform,[e.target.name]:e.target.value});
    }

    const getData = async () => {
        let u=await fetchuser(username)
        setCurrentUser(u);
        let dbpayments=await fetchpayments(username);
        setPayments(dbpayments);
        console.log(dbpayments, u);
    }

    const pay=async (amount)=>{
        // get the order id
        let a = await initiate(amount,username,paymentform);
        let orderId = a.id;
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Get Me A Chai", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      
      <div className='cover w-full bg-red-50 relative'>
      <img className='object-cover w-full h-[350]' src={currentUser.coverpic} alt='cover' />
      <div className='absolute -bottom-12 right-[46%] '>
        <img className='border-gray-400 border rounded-xl' width={120} height={120} src={currentUser.profilepic}></img>
      </div>
    </div>
    <div className='info flex justify-center items-center m-14 flex-col gap-1 mb-22'>
      <div className='font-bold text-lg '>
        @{username}
      </div>
    
    <div className='text-slate-500'>
      <span className="font-bold">Help {username} get a chai!</span>
    </div>
    <div className='text-slate-500'>
      <span>{payments.length} Payments . ₹{payments.reduce((a,b)=>a+b.amount,0)} raised.</span>
    </div>
    <div className='payment flex gap-3 w-[80%] mt-11'>
      <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-7'>
        <h2 className='font-bold text-2xl my-4'>Recent Supporters</h2>
        <ul className='mx-5 text-lg'>
          {payments.length==0 && <li>No payments yet</li>}
            {/* map over the payments and show them here */}
            {payments.map((p, i) => {
                return <li key={i} className='my-4 flex gap-2 items-center'>
          
            <img width={40} src='man.gif' className='rounded-full' />
            <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message <span className='font-bold'>"{p.message}"</span>
            </span>
          </li>
})}

          
        </ul>
      </div>
      <div className='makepayment w-1/2 bg-slate-900 rounded-lg text-white p-7'>
        <h2 className='font-bold text-2xl my-4'>Make a payment</h2>
        <div className='flex flex-col gap-3'>
          {/* input name and message for the payment */}
          <input onChange={handleChange} value={paymentform.name} name='name' className='bg-slate-800 w-full p-2 rounded-lg' type='text' placeholder='Name' />
          <input onChange={handleChange} value={paymentform.message} name='message' className='bg-slate-800 w-full p-2 rounded-lg' type='text' placeholder='Message' />
          <input onChange={handleChange} value={paymentform.amount} name='amount' className='bg-slate-800 w-full p-2 rounded-lg' type='text' placeholder='Amount' />
          <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white w-[86px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-700 disabled:from-purple-100" disabled={paymentform.name?.length<2 || paymentform.message?.length<1 || paymentform.amount?.length<1}>Pay</button>
        </div>
        {/* or choose from these amounts */}
        <div className='flex gap-3 mt-3'>
          <button className='bg-slate-700 text-white p-2 px-4 rounded-lg' onClick={()=>pay(500)}>₹5</button>
          <button className='bg-slate-700 text-white p-2 px-4 rounded-lg' onClick={()=>pay(1000)}>₹10</button>
          <button className='bg-slate-700 text-white p-2 px-4 rounded-lg' onClick={()=>pay(1500)}>₹15</button>

        </div>  

      </div>
    </div>

    </div>
    </>
  );
};

export default PaymentPage;
