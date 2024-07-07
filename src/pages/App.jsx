import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import Menu from "./menu";
import Detail from "./detail";
import Login from "./login";
import Register from "./register";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App
