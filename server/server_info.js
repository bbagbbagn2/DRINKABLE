const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

router.get('/info', (req, res) => {
    const sql = 'SELECT * FROM cocktailtable';

    sql_pool.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

module.exports = router;