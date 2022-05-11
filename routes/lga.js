const express = require("express");
const router = express.Router();
const sql = require("../db");

router.get("/", (req, res) => {
  sql.query("SELECT * from lga", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

router.get("/:lgaId", (req, res) => {
  const { lgaId } = req.params;

  sql.query(
    `SELECT * FROM announced_pu_results LEFT JOIN polling_unit ON polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid WHERE polling_unit.lga_id = "${lgaId}"`,
    (err, results) => {
      if (err) throw err;

      res.send(results);
    }
  );
});

module.exports = router;
