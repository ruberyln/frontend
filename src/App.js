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
//import Typography from '@mui/material/Typography';
<meta name="viewport" content="initial-scale=1, width=device-width" />

function App () {
    return (
    <div>
           
           <Navbar/>
      
            <Routes>
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