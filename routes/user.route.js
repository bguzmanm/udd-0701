const express = require("express");
const router = express.Router();

const { findAll, findOne, singup } = require("../controllers/user.controller");

router.get("/all", findAll);
router.post("/signup", singup);
router.get("/one", findOne);

module.exports = router;