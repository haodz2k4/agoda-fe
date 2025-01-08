import { Route, Routes } from "react-router-dom";
import Home from "../pages/clients/Home/Home";
import Login from "../pages/clients/Login/Login";
import Register from "../pages/clients/Register/Register";


function ClientRoute() {

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register />}/>
        </Routes>
    )
        
    
}

export default ClientRoute