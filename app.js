const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
var QRCode = require('qrcode');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {    
    res.render('index',{src:''})
})

app.post('/', (req, res) => {
    let data = req.body.data;
    QRCode.toDataURL(data, function (err, url){
        res.render('index',{src: url});
    })
})

app.listen (process.env.PORT || 3000, function () {
    console.log('listening on 3000');
})