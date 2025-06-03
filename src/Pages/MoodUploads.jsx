import React from "react";
import Navbar from "../Component/Dashboard/Navbar";
import MoodUpload from "../Component/Dashboard/MoodUpload";
import MoodboardFiles from "../Component/Dashboard/MoodboardFiles";
import MediaUpload from "../Component/Dashboard/MediaUpload";
import CategoryTags from "../Component/Dashboard/CategoryTags";
import SetPriceLicense from "../Component/Dashboard/SetPriceLicense";

const MoodUploads = () => {
  return (
    <>
      <Navbar />
      <MoodUpload />
      <MoodboardFiles />
      <MediaUpload />
      <CategoryTags />
      <SetPriceLicense />
    </>
  );
};

export default MoodUploads;
