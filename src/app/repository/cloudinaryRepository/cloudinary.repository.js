const cloudinary = require("cloudinary").v2;
const cloudinaryConfig = require("../../../config/cloudinary.config");
const fs = require("fs");

cloudinary.config(cloudinaryConfig);

exports.uploadProfilePicture = async (filepath) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      filepath,
      { tags: "basic_sample" },
      (error, result) => {
        fs.unlink(filepath, (err) => {
          if (err) return err;
        });
        if (result) {
          resolve(result);
        } else reject(error);
      }
    );
  });
};
