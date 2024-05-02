"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updateProfile, fetchuser } from "@/actions/useractions";
import { get } from "mongoose";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';


const Dashboard = () => {
  const { data: session, update } = useSession();

  const router = useRouter();
  const [form, setForm] = useState({});
  useEffect(() => {
    
    if (!session) {
      router.push("/login");
    }
    else
    {
      getData();
    }
    console.log(session);
  }, [router, session]);

  const getData = async () => {
      let u = await fetchuser(session.user.name);
      setForm(u);
    
  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name);
    toast('🦄 Wow so easy!', {
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

    <div className="container mx-auto py-5" >
      <h1 className="text-3xl font-bold text-center mb-16">
        Welcome to your dashboard
      </h1>

      <form className="max-w-2xl mx-auto" action={handleSubmit}>

        <div className="my-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
          <input value={form.name?form.name: ""} onChange={handleChange} type="text" name="name" id="name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 test-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        {/* input for email */}

        <div className="my-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
          <input value={form.email?form.email: ""} onChange={handleChange} type="email" name="email" id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 test-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        {/* input for username */}
        <div className="my-2">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-white dark:text-white">UserName</label>
          <input value={form.username?form.username: ""} onChange={handleChange} type="text" name="username" id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 test-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        {/* input for profile picture */}
        <div className="my-2">
          <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-white dark:text-white">Profile Picture</label>
          <input value={form.profilepic?form.profilepic: ""} onChange={handleChange} type="text" name="profilepic" id="profilepic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 test-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        {/* input for cover picture */}
        <div className="my-2">
          <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-white dark:text-white">Cover Picture</label>
          <input value={form.coverpic?form.coverpic: ""} onChange={handleChange} type="text" name="coverpic" id="coverpic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 test-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>

        {/* input razorpay id */}
        <div className="my-2">
          <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-white dark:text-white">Razorpay Id</label>
          <input value={form.razorpayid?form.razorpayid: ""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 test-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>

        {/* input razorpay secret */}
        <div className="my-2">
          <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-white dark:text-white">Razorpay Secret</label>
          <input value={form.razorpaysecret?form.razorpaysecret: ""} onChange={handleChange} type="text" name="razorpaysecret" id="razorpaysecret" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 test-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

      


      {/* button to save the form */}
      <div className="my-6">
        <button
          type="submit"
          className="text-white w-[200px] mt-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Save
        </button>
      </div>
      </form>
    </div>
    </>
  );
}

export default Dashboard;
