import { Grid } from "@mui/material";
import React from "react";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import Trend from "../Trend/Trend";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import TweetDetails from "../TweetDetails/TweetDetails";
import Explore from "../Explore/Explore";

const Home = () => {
  return (
    <Grid container xs={12} className="px-5 lg:px-30 justify-between ">
      <Grid item xs={0} lg={3} className=" lg-block w-full relative ">
        <Navigation />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        className=" px-5 lg:px-9 lg-block w-full relative "
      >
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/home" element={<HomeSection />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/tweetDetails/:id" element={<TweetDetails />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
        </Routes>
      </Grid>
      <Grid item xs={0} lg={3} className=" lg-block w-full relative ">
        <Trend />
      </Grid>
    </Grid>
  );
};

export default Home;
