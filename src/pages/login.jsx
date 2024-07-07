import React from "react";
import Input from "../components/element/Input";
import { Link } from "react-router-dom";
import passwordIcon from "../components/icons/passwordIcon";
import SignIn from "../components/fragment/SignIn";

const Login = () => {
  return (
    <div
      className="flex  bg-Brown-300 w-full justify-center items-center h-screen ">
      <div className="border p-4 text-center space-y-2 w-96 rounded bg-white ">
        <h1 className="text-3xl text-Brown-300 my-2 font-bold">Login</h1>
        <SignIn />
        <div className="mt-2">
        OJAN KONTOL{" "}
        <Link
          to="/register"
          className="underline text-Brown-300
         font-bold">
          Register
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
