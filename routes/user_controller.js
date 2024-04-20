var express = require('express');
var router = express.Router();
const User = require("../model/user");

router.post("/postUser", (req, res, next) => {
  // 	#swagger.tags = ['User']

  res.status(200).json({
    message: "EIEIEIIEI USER POST",
  });
});

module.exports = router;
