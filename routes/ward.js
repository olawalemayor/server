const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("ward is working");
});

module.exports = router;
