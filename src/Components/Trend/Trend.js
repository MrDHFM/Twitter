import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Button } from "@mui/material";
import GetVerifiedModal from "./GetVerifiedModal";

const Trend = () => {
  const [openVerifyModal, setOpenVerifyModal] = React.useState(false);
  const handleOpenVerifyMadal = () => setOpenVerifyModal(true);
  const handleCloseVerifyModal = () => setOpenVerifyModal(false);
  const handleChangeTheme = () => {};

  return (
    <div className=" py-5 sticky top ">
      <div className=" relative flex items-center  ">
        <input
          type="text"
          className=" py-3 rounded-full text-gray-500 w-full pl-12 border-2 "
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness4Icon
          className="ml-3 cursor-pointer "
          onClick={handleChangeTheme}
        />
      </div>
      <section className=" my-5  ">
        <h1 className=" font-xl font-bold ">Get Verified</h1>
        <h1 className=" font-bold my-2  ">Subscribe to unlock new features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
          onClick={handleOpenVerifyMadal}
        >
          Get Verified
        </Button>
      </section>
      <section className=" mt-7 space-y-5 ">
        <h1 className=" font-bold text-xl py-1 ">What's Happening</h1>
        <div>
          <p className=" text-sm ">FIFA Worldcup</p>
          <p className="font-bold">IND vs PAK</p>
        </div>
        {[1, 1, 1, 1, 1].map((item) => {
          return (
            <div className="flex justify-between w-full">
              <div>
                <p>Entertainment . Trending</p>
                <p className="font-bold">#GunturKaram</p>
                <p>100.9K Tweets</p>
              </div>
              <MoreHorizIcon />
            </div>
          );
        })}
      </section>
      <section>
        <GetVerifiedModal
          open={openVerifyModal}
          handleClose={handleCloseVerifyModal}
        />
      </section>
    </div>
  );
};

export default Trend;
