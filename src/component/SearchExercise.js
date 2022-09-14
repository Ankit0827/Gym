import React, { useEffect, useState } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions,fetchData } from "../utills/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = () => {
 const [Search ,setSearch]= useState('')
 const [exercises ,setExercises]= useState([]);

 const [bodyParts, setBodyParts]=useState([]);

 useEffect(() => {
  const fetchExercisesData= async()=>{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartsList',exerciseOptions );

    setBodyParts(['all',...bodyPartsData]);
  }


  fetchExercisesData();
 }, [])
 


 const handleSearch= async()=>{

if(Search){

  const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

  const  SearchExercise= exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(Search)
  ||exercise.target.toLowerCase().includes(Search)
  ||exercise.equipment.toLowerCase().includes(Search)
  ||exercise.bodyParts.toLowerCase().includes(Search)
  ) ;
  setSearch("");
  setExercises("searchExercises");
}

 }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={Search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTranform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right:"0"
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:"relative",p:"20px",width:"100%"}}>

        <HorizontalScrollbar  data={bodyParts}/>

      </Box>
    </Stack>
  );
};

export default SearchExercise;
