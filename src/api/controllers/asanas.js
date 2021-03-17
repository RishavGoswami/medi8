// Import the data
const asanasData = require("../../data");

//  @desc Get all asanas
exports.all = (req, res) => res.send(asanasData);
