const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

router.get('/flavor', (req, res) => {
    const flavor = req.query.flavor;
    const sql_flavor = 'SELECT * FROM cocktailtable WHERE flavor = ?'; 

    sql_pool.query(sql_flavor,[flavor], (err_flavor, rows_falvor, result_flavor) => {
        if(err_flavor)
            console.log(err_flavor)
        else
            res.send(rows_falvor)
    });
});

router.get('/amount', (req, res) => {
    const amount = req.query.amount;
    const sql_amount = 'SELECT * FROM cocktailtable WHERE amount = ?'; 

    sql_pool.query(sql_amount,[amount], (err_amount, rows_amount, result_amount) => {
        if(err_amount)
            console.log(err_amount)
        else
            res.send(rows_amount)
    });
});

module.exports = router;