import React from "react";
import{Routes,Route} from "react-router-dom"

import Header from "./components/Header";
import Footer from "./components/Footer"

import Signup from "./components/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

import Events from "./pages/Events";
import Posts from "./pages/Posts";
import Post from "./components/PostDetails";
import DeletePost from "./components/DeletePost";
import EditPost from "./components/EditPost";
import CreatePost from "./components/CreatePosts";



const App = () => {
  return (
    <div className="clear:bg-neutral-900 min-h-screen flex flex-col">
      <Header />
      <main id="content">
        <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>

        <Route path="/events" element = {<Events/>}/>
        
        <Route path="/posts" element = {<Posts/>}/>
        <Route path="/api/posts/:id" element = {<Post/>}/>
        <Route path ="/posts/new" element = {<CreatePost/>}/>
        <Route path="/posts/:id/delete" element={<DeletePost />} />
        <Route path="/posts/:id/edit" element={<EditPost/>}/>

        


        </Routes>
      </main> 
      <Footer/> 
    </div>
  );
};

export default App;