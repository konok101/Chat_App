//External imports
const express = require("express");
const dotenv = require("dotenv");
const mongose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

//Internal Imports
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');
const loginRouter = require('./Router/loginRouter')
const usersRouter = require('./Router/usersRouter')
const inboxRouter = require('./Router/inboxRouter')


const app = express();
dotenv.config();

mongose.connect(process.env.CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(() => console.log('dataBase Connect succesfully !!!'))
    .catch((err) => console.log(err))


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('view engine', "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse  cookie 
app.use(cookieParser(process.env.COOKIE_SECRT));


app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter)




//error or 404 handler
app.use(notFoundHandler)

//common error handler
app.use(errorHandler)





app.listen(5000, () => {
    console.log('run this app');
})