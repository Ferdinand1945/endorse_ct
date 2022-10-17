import React from "react";
import './styles/App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserprofileList from "./pages/UserprofileList";
import Information from "./pages/Information";
import UserProfile from "./pages/UserProfile";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/users" element={<UserprofileList/>}></Route>
        <Route path="/info" element={<Information/>}></Route>
        <Route path="/profile/:id" element={<UserProfile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;