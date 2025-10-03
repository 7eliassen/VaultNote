import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Registration from "./pages/auth/Registration.jsx";
import Home from "./pages/Home.jsx";


function App() {
  const navigate = useNavigate();
  const location = useLocation()


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home")
    } else if (location.pathname != "/register") {
      navigate("/login")
    }
  }, []) 


  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/" element={null} />
    </Routes>
  );
}



//I don't sure what is it, but it needs
function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;

