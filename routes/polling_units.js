const express = require("express");
const router = express.Router();
const sql = require("../db");

router.get("/", (req, res) => {
  sql.query("SELECT * from polling_unit", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

router.get("/:pollingId", (req, res) => {
  const { pollingId } = req.params;
  sql.query(
    `SELECT * from polling_unit WHERE uniqueid = ${pollingId} LIMIT 1`,
    (err, results) => {
      if (err) throw err;

      res.send(results[0]["polling_unit_name"]);
    }
  );
});

module.exports = router;
