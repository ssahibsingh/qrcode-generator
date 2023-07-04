const express = require('express');
const bodyParser = require('body-parser');
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

app.listen (process.env.PORT || 5000, function () {
    console.log('listening on', process.env.PORT || 5000);
})