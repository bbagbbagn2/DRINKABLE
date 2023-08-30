const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

router.post('/resister', (req, res) => {
    const { id, password, username } = req.body;

    if (id && password && username) {
        const sql = 'INSERT INTO user(id, password, username) VALUES(?, ?, ?)';

        sql_pool.query(sql, [id, password, username], (error, results) => {
            if (error) {
                console.error(error);
                res.send("fail");
            } else {
                res.send("success");
            }
        });
    } else {
        res.send("void");
    }
});

router.post('/login', (req, res) => {
    const { id, password } = req.body;

    if (!id || !password) {
        res.send("void");
    }

    const sql = 'SELECT * FROM user WHERE id = ? AND password = ?';

    sql_pool.query(sql, [id, password], (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
            return;
        }
        if (results.length > 0) {
            req.session.user = results[0];
            res.status(200).send("success");
        } else {
            res.status(401).send("fail");
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
    });
});

router.post('/get_user', (req, res) => {
    const sql = 'SELECT * FROM user where id = ?'
    const userId = req.session.sign;

    sql_pool.query(sql, [userId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching user data.");
        } else {
            res.send(results);
        }
    });
});

router.post('/get_profile', (req, res) => {
    const user = req.body.user;

    const sql = 'SELECT * FROM user where id = ?';

    sql_pool.query(sql, [user], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

module.exports = router;