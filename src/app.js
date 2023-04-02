var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const middleware = require('./common/middleware')

var inquiryRouter = require('./routes/inquiry.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(middleware.response)

// 一覧取得API
app.use('/', inquiryRouter);

app.get('/test', (req, res) => {
    res.send('test')
})

const port = 4001
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
