import React from 'react'
import Input from "../components/element/Input";
import { Link } from "react-router-dom";
import passwordIcon from "../components/icons/passwordIcon";
import SignIn from "../components/fragment/SignIn";
import imageForm from "../assets/auth-img/imageForm.jpg";

const AdminLogin = () => {
  return (
    <div className="flex h-screen">
     <div
      className="flex  bg-Brown-300 w-full justify-center items-center ">
      <div className="border p-4 text-center space-y-2 w-96 rounded bg-white ">
        <h1 className="text-3xl text-Brown-300 my-2 font-bold">Login</h1>
        <SignIn />
      </div>
    </div>
    {/* <img src={imageForm} className="relative object-covern hidden lg:inline-block"  alt="" /> */}
    </div>
  )
}

export default AdminLogin