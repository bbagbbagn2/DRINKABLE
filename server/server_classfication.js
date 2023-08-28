const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

function queryCocktailsBy(columnName, value, res) {
    const sql = `SELECT * FROM cocktailtable WHERE ${columnName} = ?`;

    sql_pool.query(sql, [value], (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
        }
    });
}

router.get('/flavor', (req, res) => {
    const flavor = req.query.flavor;

    queryCocktailsBy('flavor', flavor, res);
});

router.get('/amount', (req, res) => {
    const amount = req.query.amount;

    queryCocktailsBy('amount', amount, res);
});

module.exports = router;