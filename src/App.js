import React from 'react';
import Navbar from "./components/navbar";
//import ImageSlider from './components/ImageSlider';
import { images } from './components/images';
import {SwipeableTextMobileStepper} from "./SwipeableTextMobileStepper";
//import {BrowserRouter as Router} from "react-router-dom"
//import { Routes, Route, Link } from "react-router-dom";
//import SignUp from './components/signup';
//import SignIn from './components/signin';

//import Typography from '@mui/material/Typography';

function App () {
    return (
    <div>
            <Navbar />

      <SwipeableTextMobileStepper slides={images} /> 
            </div>
    );
}
  
export default App;