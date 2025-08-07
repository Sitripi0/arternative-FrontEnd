import React from "react";
import{Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import Artist from "./pages/Artist";
import Footer from "./components/Footer"
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
        <Route path="/artist" element = {<Artist/>}/>
        <Route path="/events" element = {<Events/>}/>
        </Routes>
      </main> 
      <Footer/> 
    </div>
  );
};

export default App;