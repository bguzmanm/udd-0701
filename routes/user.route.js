const express = require("express");
const router = express.Router();

const { findAll, findOne, signup } = require("../controllers/user.controller");

router.get("/all", findAll);
router.post("/signup", signup);
router.get("/one", findOne);

module.exports = router;