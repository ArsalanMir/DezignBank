import React from "react";
import Navbar from "../Component/Dashboard/Navbar";
import ProjectBasics from "../Component/Dashboard/ProjectBasics";
import FileUpload from "../Component/Dashboard/FileUpload";
import MediaUpload from "../Component/Dashboard/MediaUpload";
import CategoryTags from "../Component/Dashboard/CategoryTags";
import SetPriceLicense from "../Component/Dashboard/SetPriceLicense";

const DesignUploads = () => {
  return (
    <div>  
      <Navbar />
      <ProjectBasics />
      <FileUpload />
      <MediaUpload />
      <CategoryTags />
      <SetPriceLicense />
    </div>
  );
};

export default DesignUploads;
