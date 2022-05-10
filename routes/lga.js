const express = require("express");
const router = express.Router();
const sql = require("../db");

router.get("/", (req, res) => {
  sql.query("SELECT * from lga", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
