const express = require("express");
const router = express.Router();
const sql = require("../db");

router.get("/", (req, res) => {
  sql.query("SELECT * from polling_unit", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

router.get("/polls/:pun", (req, res) => {
  const { pun } = req.params;
  sql.query(
    `SELECT * FROM announced_pu_results LEFT JOIN polling_unit ON polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid WHERE pu_result.polling_unit_number = "${pun}"`,
    (err, results) => {
      if (err) throw err;

      res.send(results);
    }
  );
});

module.exports = router;
