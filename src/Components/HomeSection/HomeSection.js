import { Avatar, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import TweetCard from "../TweetCard/TweetCard";

const schema = yup.object().shape({
  tweet: yup.string().required("Required"),
});

const HomeSection = () => {
  const formik = useFormik({
    initialValues: {
      tweet: "",
    },
    onSubmit: (values) => {
      console.log("submit");
      console.log(values);
      console.log(formik.errors);
      formik.resetForm();
    },
    validationSchema: schema,
  });
  // console.log(formik.values.tweet);

  return (
    <div className="space-y-5 ">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90 ">Home</h1>
      </section>
      <section>
        <div className="flex space-x-3">
          <Avatar
            alt="username"
            src="https://pbs.twimg.com/profile_images/1424015789053530116/KjDoXEDr_400x400.jpg"
          />
          <div className=" w-full">
            <form className="" onSubmit={formik.handleSubmit} res>
              <div className="w-full  ">
                <input
                  type="text"
                  name="tweet"
                  placeholder="what is happening?!"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.tweet}
                  className="border-none outline-none text-xl bg-transparent "
                />
              </div>
              {/* {formik.errors.tweet && formik.touched.tweet && (
                <span className=" text-rose-600  ">{formik.errors.tweet}</span>
              )} */}
              <div className="flex justify-between  items-center py-9  w-full ">
                <div className="flex space-x-3 items-center ">
                  <label className="flex items-center space-x-3 rounded-md cursor-pointer">
                    <ImageIcon />
                    <input type="file" name="imgFile" className="hidden" />
                  </label>
                  <label className="flex items-center space-x-3 rounded-md cursor-pointer">
                    <GifBoxIcon />
                    <input type="file" name="imgFile" className="hidden" />
                  </label>
                  <label className="flex items-center space-x-3 rounded-md cursor-pointer">
                    <BallotIcon />
                    <input type="file" name="imgFile" className="hidden" />
                  </label>
                  <label className="flex items-center space-x-3 rounded-md cursor-pointer">
                    <SentimentSatisfiedAltIcon />
                    <input type="file" name="imgFile" className="hidden" />
                  </label>
                  <label className="flex items-center space-x-3 rounded-md cursor-pointer">
                    <WorkHistoryIcon />
                    <input type="file" name="imgFile" className="hidden" />
                  </label>
                  <label className="flex items-center space-x-3 rounded-md cursor-pointer">
                    <LocationOnIcon />
                    <input type="file" name="imgFile" className="hidden" />
                  </label>
                </div>
                <div className=" mr-6 ">
                  <Button
                    type="submit"
                    className=""
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                    disabled={formik.errors.tweet ? true : false}
                  >
                    Post
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
        {[1, 1, 1, 1, 1].map((item) => {
          return <TweetCard />;
        })}
      </section>
    </div>
  );
};

export default HomeSection;
