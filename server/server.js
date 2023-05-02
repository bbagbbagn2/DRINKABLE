const express = require('express');
const session_stream = require('./config/session');

const app = express();
const HTTP_PORT = 5000;

const server_info = require('./server_info');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session_stream);

app.use(server_info);

app.get('/', (req, res) => {
    res.json({message: `Server is running on port ${HTTP_PORT}`})
})

app.listen(HTTP_PORT, () => {
    console.log(`Server On : http://localhost:${HTTP_PORT}/`);
})