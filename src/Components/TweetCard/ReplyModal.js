import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useFormik } from "formik";
import * as yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function BasicModal({ open, handleClose }) {
  //   const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    tweet: yup.string().required("Required"),
  });

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

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <Avatar
              onClick={() => navigate(`profile/${3}`)}
              className="cursor-pointer"
              alt="username"
              src="https://pbs.twimg.com/profile_images/1424015789053530116/KjDoXEDr_400x400.jpg"
            />
            <div className="w-full ">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2 ">
                  <span>name</span>
                  <span>@uname . 2m</span>
                  <VerifiedIcon className="ml-2 " />
                </div>
              </div>
              <div>
                <div
                  onClick={() => navigate(`/tweetDetails/${3}`)}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">Jai Babu Jai Jai Babu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
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
          </div>
        </Box>
      </Modal>
    </div>
  );
}
