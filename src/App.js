import React from 'react';
import Navbar from "./components/navbar";
//import Container from "./components/Container"
import SignIn from './components/signin';
import SignUp from './components/signup';
//import Link from '@mui/material/Link';
import Drawer from './components/drawer';
import { Route, Routes, } from "react-router-dom";
import SignOut from './components/signout';
import Success from './components/success';
import Upload from './components/upload';
import Home from './components/home';
//import Post from './components/post';
import LikePage from'./components/likes';
import CreatePost from './components/createpost';
import Comments from "./components/comments/Comments";
import Profile from './components/profile';
import ImageAvatar from './components/avatar';
import DrawerCopy from './components/drawercopy';
//import { Container } from '@mui/system';
//import Typography from '@mui/material/Typography';
<meta name="viewport" content="initial-scale=1, width=device-width" />

function App () {
    return (
    <div>
           
         
       
            <Routes>
 <Route exact path= "/drawercopy" element={<DrawerCopy />} />      
    <Route exact path= "/avatar" element={<ImageAvatar />} />        
<Route exact path= "/profile" element={<Profile />} /> 
    <Route exact path= "/Comments" element={<Comments />} /> 
    <Route exact path= "/createpost" element={<CreatePost />} /> 
    <Route exact path= "/likes" element={<LikePage />} /> 
    <Route exact path= "/upload" element={<Upload />} /> 
    <Route exact path= "/" element={<Navbar />} /> 
 <Route exact path= "/home" element={<Home />} /> 
<Route exact path= "/signout" element={<SignOut />} />  
 <Route exact path= "/success" element={<Success />} />  
<Route exact path= "/drawer" element={<Drawer />} />
    <Route exact path= "/signup" element={<SignUp />} />
    <Route exact path= "/signin" element={<SignIn />} />


     </Routes>
       
         
    
            </div>
    );
}
  
export default App;