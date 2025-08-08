import React from "react";
import{Routes,Route} from "react-router-dom"

import Header from "./components/Header";
import Footer from "./components/Footer"

import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import Artist from "./pages/Artist";
import Events from "./pages/Events"

const App = () => {
  return (
    <div className="clear:bg-neutral-900 min-h-screen flex flex-col">
      <Header />
      <main id="content">
        <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/myprofile" element = {<MyProfile/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/artist" element = {<Artist/>}/>
        <Route path="/events" element = {<Events/>}/>
        </Routes>
      </main> 
      <Footer/> 
    </div>
  );
};

export default App;