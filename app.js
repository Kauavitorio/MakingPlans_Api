const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const userRoute = require('./Routes/users')

//#region Configuring Requests
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true})); // ONLY simple data
app.use(bodyParser.json()); // body entry json

//  Configuring request
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
//#endregion

//#region Routes

//#region  Default Routes
app.get('/', async (request, response) => {
    response.redirect('https://uspery.com/')
});

//  When rote not found, joing here:
app.use((req, res, next) => {
    const erro = new Error('Not found');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

//#endregion

//#endregion

module.exports = app;