import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Explore = () => {
  return (
    <div>
      <section>
        <div className="relative flex items-center mt-3  ">
          <input
            placeholder="Search"
            type="text"
            className=" py-2 rounded-full text-gray-500 w-full pl-12 border-2 "
          />
          <div className="absolute top-0 left-0 pl-3 pt-2">
            <SearchIcon className="text-gray-500" />
          </div>
          <SettingsIcon />
        </div>
      </section>
    </div>
  );
};

export default Explore;
