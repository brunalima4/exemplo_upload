const express = require('express');
const app = express();
const multer = require('multer');

const upload = multer ({dest: 'img/'});
app.use('/img', express.static('img'));
app.use(express.static('public'));

app.listen(3000, () => console.log("rodando em https://localhost:3000"));