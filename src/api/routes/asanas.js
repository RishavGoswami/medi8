const express = require("express");
const router = express.Router();

// Asanas Controllers
const Asanas = require("../controllers/asanas");

/**
 *    @route    GET v1/api/asanas;
 *    @desc     Get the list of asanas list
 *    @access   Public
 **/

router.get("/all", Asanas.all);

module.exports = router;
