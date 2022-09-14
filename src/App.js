import React from "react";
import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Exercise from './Pages/Exercise';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import Footer from './component/Footer';




const App=()=>{
    return(
        <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/exercise/:id' element={<Exercise/>}/> 
            </Routes>
            <Footer/>
        </Box>
           )
   
}
export default App;