import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Registration from "./pages/auth/Registration.jsx";
import Home from "./pages/home.jsx";


function App() {
  const navigate = useNavigate();

  //Check if user is logged in
  useEffect(() => {
    const token = 1; // TODO: (HACK) pretend login check
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [navigate]);


  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
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

