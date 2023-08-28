const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

router.get('/info', (req, res) => {
  const sql_items = 'SELECT * FROM cocktailtable';

  sql_pool.query(sql_items, (error, results, fields) => {
    if (error) {
      console.error("Error fetching cocktailtable data:", error);
      return res.send("error");
    } else {
      res.send(results);
    }
  });
});

module.exports = router;