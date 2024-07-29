const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

const menuController = require('../controllers/menuControllers')

//get all menu items
router.get("/",menuController.getAllMenuItems );


module.exports= router;
