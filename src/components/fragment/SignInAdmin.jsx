import axios from "axios";
import React from "react";

const SignInAdmin = () => {
  const [isLogin, setIsLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://kohi-backend.vercel.app/api/auth/login",
        JSON.stringify(isLogin),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data); // Log respons error untuk membantu debugging
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setIsLogin({
      ...isLogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} method="POST">
      <Input
        htmlFor={"email"}
        type={"text"}
        onChange={handleChange}
        name={"email"}
        value={isLogin.email}
        placeholder={"Type your email"}
        label={"Email"}
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
      <Button
        type={"submit"}
        className={"text-Brown-100 bg-Brown-800 p-2 rounded"}>
        Login
      </Button>
    </form>
  );
};

export default SignInAdmin;
