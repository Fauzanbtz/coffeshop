import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from "./main";
import Menu from "./menu";
import Detail from "./detail";
import Login from "./login";
import Register from "./register";
import NavbarLayout from "../components/layout/navbarLayout";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AppContent = () => {
  const location = useLocation();
  const path = location.pathname;
  const hideNavbar = ["/login", "/register"].includes(path);
  useEffect(() => {
    Aos.init({
        duration: 500
    });
  },[])
  return (
    <>
    <div className="flex justify-center overflow-hidden bg-Brown-100">
      <div className="flex w-full  flex-col max-w-7xl items-center">
        {!hideNavbar && <NavbarLayout />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/detail/:id" element={<Detail />} />
        
        </Routes>
      </div>
    </div>
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;