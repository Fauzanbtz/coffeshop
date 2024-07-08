import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/fragment/Signup";
import imageForm from "../assets/auth-img/imageForm.jpg";

const Register = () => {
  return (
    <div className="flex h-screen">

{/* <img src={imageForm} className="relative" alt="" /> */}
      <div className="flex  bg-Brown-300 w-full justify-center items-center h-screen ">
        <div className="border p-4 text-center space-y-2 w-96 rounded bg-white ">
          <h1 className="text-3xl text-Brown-300 my-2 font-bold">Register</h1>
          <SignUp />
          <div className="mt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline text-Brown-300 font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;
