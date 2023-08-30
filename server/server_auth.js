const express = require('express');
const router = express.Router();
const sql_pool = require('./config/db');

router.post('/resister', (req, res) => {
    const id = req.body.id
    const password = req.body.pw
    const name = req.body.name
    //클라이언트에서 전달된 값들을 받아옴

    if (id && password && name) {
        const sql = 'INSERT INTO user(id, password, nickname) VALUES(?, ?, ?)'
        //id, 비밀번호, 닉네임을 다음과 같이 회원정보를 DB에 저장
        sql_pool.query(sql, [id, password, name], (err, result) => {
            if (err)
                res.send("fail")
            else
                res.send("success")
        })
    }
    else
        res.send("void")
})

router.post('/login', (req, res) => {
    const id = req.body.id
    const password = req.body.pw
    //클라이언트에서 전달된 값들을 받아옴

    if (id && password) {
        const sql = 'SELECT * FROM user WHERE id = ? AND password = ?'
        //해당하는 아이디와 비밀번호가 있는지 확인
        sql_pool.query(sql, [id, password], (err, result) => {
            if (err)
                throw err
            if (result.length > 0) {
                req.session.sign = id
                res.send("success")
                //정보가 있다면 로그인
            }
            else
                res.send("fail")
        })
    }
    else
        res.send("void")
})

router.post('/logout', async (req, res) => {
    try {
        await req.session.destroy();
        res.send("success");
    } catch (error) {
        console.error(error);
        res.send("Internal Server Error");
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