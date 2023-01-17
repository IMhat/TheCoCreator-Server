const express = require("express");
const userRouter = express.Router();
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");
const User = require("../models/user");



module.exports = userRouter;