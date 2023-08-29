const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

router.post('/login', (req, res) => {
    const id = req.body.id;
    const password = req.body.pwd;

    if (!id || !password) {
        res.send("void");
    }

    const sql = 'SELECT * FROM user WHERE id = ? AND password = ?';

    sql_pool.query(sql, [id, password], (error, results, fields) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            req.session.sign = id;
            res.send("success");
        } else {
            res.send("fail");
        }
    });
});

router.post('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            throw error;
        } else {
            res.send("success");
        }
    });
});

router.post('/get_auth', (req,res) => {
    const sql = 'SELECT * FROM user where id = ?';

    sql_pool.query(sql, [req.session.sign], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

module.exports = router;