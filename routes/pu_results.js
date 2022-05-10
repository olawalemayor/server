const express = require("express");
const router = express.Router();
const sql = require("../db");

router.get("/:party", (req, res) => {
  const { party } = req.params;
  sql.query(
    `SELECT * FROM announced_pu_results LEFT JOIN polling_unit ON polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid WHERE announced_pu_results.party_abbreviation = "${party}"`,
    (err, results) => {
      if (err) throw err;

      res.send(results);
    }
  );
});

module.exports = router;
