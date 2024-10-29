import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Singup";
import Login from "./pages/Login";

export default function App(){

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}