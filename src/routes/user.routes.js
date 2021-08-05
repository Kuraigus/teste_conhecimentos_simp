const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload.config");

const { UserController } = require("../app/controller/index.js");

const userRouter = Router();
const upload = multer(uploadConfig);

userRouter.post("/", upload.single("profilePicture"), UserController.create);
userRouter.get("/", UserController.findAll);
userRouter.get("/:userId", UserController.findOne);
userRouter.put("/:userId", UserController.update);
userRouter.delete("/:userId", UserController.delete);
userRouter.put("/:userId/book/:bookId", UserController.addBook);

module.exports = userRouter;
