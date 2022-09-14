import { Box } from "@mui/material";
import React,{useState} from "react";
import Herobanner from "../component/Herobanner";
import SearchExercise from "../component/SearchExercise";
import Exercises from "../component/Exercises";


const Home =()=>{

   return(
   <Box>
    <Herobanner/>
    <SearchExercise/>
    <Exercises/>
   </Box>

   )
}
export default Home;