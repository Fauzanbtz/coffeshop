import { useState } from "react";
import Button from "../element/button";
import Input from "../element/Input";

function SignUp() {
    const [isLogin, setIsLogin] = useState({
      name: "",
      password: "",
      confirmPassword: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
    }
  
    const handleChange = (e) => {
      e.preventDefault();
      setIsLogin({
          ...isLogin,
          [e.target.name]: e.target.value
      })
    }
  
    return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} method="POST">
        <Input
          htmlFor={"name"}
          type={"text"}
          onChange={handleChange}
          name={"name"}
          value={isLogin.name}
          placeholder={"Username"}
          label={"Username"}
        />
        <Input
          htmlFor={"password"}
          type={"password"}
          onChange={handleChange}
          name={"password"}
          value={isLogin.password}
          placeholder={"********"}
          label={"Password"}
        />
        <Input
        htmlFor={"confirmPassword"}
        type={"password"}
        onChange={handleChange}
        name={"confirmPassword"}
        value={isLogin.confirmPassword}
        placeholder={"********"}
        label={"Confirm Password"}
        />
        <Button
          type={"submit"}
          className={"text-Brown-100 bg-Brown-800 p-2 rounded"}>
          Login
        </Button>
      </form>
    );
  }
  
  export default SignUp;
  