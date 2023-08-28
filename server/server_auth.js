const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

router.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.pwd;

    if (!username || !password) {
        return res.send("void");
    }

    const sql = 'SELECT * FROM user WHERE username = ? AND password = ?'

    sql_pool.query(sql, [username, password], (error, results, fields) => {
        if (error) {
            console.error("Error executing login query:", error);
            return res.send("error");
        }
        if (results.length > 0) {
            req.session.sign = username;
            res.send("success");
        } else {
            res.send("fail");
        }
    });
});

router.post('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.error("Error destroying session:", error);
            return res.send("error");
        } else {
            res.send("success");
        }
    });
});

module.exports = router;