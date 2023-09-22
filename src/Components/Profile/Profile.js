import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TweetCard from "../TweetCard/TweetCard";
import ProfileModal from "../ProfileModal/ProfileModal";

const Profile = () => {
  const [value, setValue] = React.useState("1");
  const [openProfileModal, setOpenProfileModal] = React.useState(false);
  const handelOpenProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handelFollowUser = () => {};
  const navigate = useNavigate();

  const handelBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <section className="bg-white z-50 flex items-center sticky top-0 bg-opacity-95">
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handelBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5 ">Butchi Raju</h1>
      </section>
      <section>
        <img
          className="object-cover"
          alt=""
          src="https://pbs.twimg.com/profile_banners/1029757676/1633458588/1080x360"
        />
      </section>
      <section>
        <div className="flex justify-between items-center mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-14 ml-4"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
            alt="username"
            src="https://pbs.twimg.com/profile_images/1424015789053530116/KjDoXEDr_400x400.jpg"
          />
          {true ? (
            <Button
              onClick={handelOpenProfileModel}
              sx={{ borderRadius: "20px" }}
              variant="contained"
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handelFollowUser}
              sx={{ borderRadius: "20px" }}
              variant="contained"
            >
              {true ? "Follow" : "UnFollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Butchi Raju</h1>
            {true && <VerifiedIcon className="ml-2 " />}
          </div>
          <h1 className="text-gray-500">@JButchiraju</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>Jai babu jai jai babu</p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500 space-x-1">
              <BusinessCenterIcon />
              <p>Education</p>
            </div>
            <div className="flex items-center text-gray-500 space-x-1">
              <LocationOnIcon />
              <p>India</p>
            </div>
            <div className="flex items-center text-gray-500 space-x-1">
              <CalendarMonthIcon />
              <p>Joined December 2012</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold cursor-pointer ">
              <span>1</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold cursor-pointer">
              <span>1000</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Posts" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 1].map((item) => {
                return <TweetCard />;
              })}
            </TabPanel>
            <TabPanel value="2">Replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
};

export default Profile;
