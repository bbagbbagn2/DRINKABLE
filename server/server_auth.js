const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

router.post('/resister', (req, res) => {
    const id = req.body.id;
    const password = req.body.pwd;
    const name = req.body.name;

    if (id && password && name) {
        const sql = 'INSERT INTO user(id, password, username) VALUES(?, ?, ?)';

        sql_pool.query(sql, [id, password, name], (error, results) => {
            if (error) {
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
    const id = req.body.id;
    const password = req.body.pwd;

    if (id && password) {
        const sql = 'SELECT * FROM user WHERE id = ? AND password = ?';

        sql_pool.query(sql, [id, password], (error, results) => {
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
    } else {
        res.send("void");
    }
})

router.post('/logout', async (req, res) => {
    try {
        await req.session.destroy();
        res.send("success");
    } catch (error) {
        console.erroror(error);
        res.send("Internal Server error");
    }
});

router.post('/get_auth', (req, res) => {
    if (req.session.sign) {
        res.send(req.session.sign);
    } else {
        res.send("null");
    }
});

router.post('/get_user', (req, res) => {
    const userId = req.session.sign;
    const sql = 'SELECT * FROM user where id = ?'

    sql_pool.query(sql, [userId], (error, results) => {
        if (error) {
           throw error;
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