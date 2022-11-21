//dev script (in package.json) can be called live or build instead of "dev" once completed

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schemas = require('./models/Schemas.js');
const session = require('express-session');
require('dotenv/config'); //enables using .env file

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(
    session({
        secret: '123', //process.env.SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            httpOnly: true,
            maxAge: 3600000 //parseInt(process.env.SESSION_MAX_AGE)
        }
    })
);

app.use((req, res, next) => {
    console.log(req.session);
    next();
})

//DB CONNECTION
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});

const PORT = process.env.PORT || 4000; //backend routing port (must be different from frontend port)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
})

//OTHER

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username != 'alex') {
        /*const str = [{
            "msg": "Username does not exist."
           }]; 
        res.end(JSON.stringify(str));*/
        res.redirect('/login-fail');
        res.end();
    } else if (password != '123') {
        /*const str = [{
            "msg": "Incorrect Username or Password."
           }]; 
        res.end(JSON.stringify(str));*/
        res.redirect('/login-fail');
        res.end();
    } else {
        /*const str = [{
            "msg": "Login Successful!"
           }]; 
        res.end(JSON.stringify(str));*/
        req.session.authenticated = true;
        req.session.user = username
        res.redirect('/');
        res.end();
    }
});

app.post('/register', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const user = {username: username, 
                  password: password,
                  name: name, 
                  email: email
                };
    const newUser = new Schemas.Users(user);
    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.redirect('/login')
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.redirect('/register-fail')
        res.end('User not added!');
    }
});

app.post('/fee', async (req, res) => {
    const cardBrand = req.body.cardBrand;
    const cardNumber = req.body.cardNumber;
    const expDate = req.body.expDate;
    const cardHolder = req.body.cardHolder;
    const cvv = req.body.cvv;
    const billingAddress = req.body.billingAddress;
    const zipCode = req.body.zipCode;

    const payment = {cardBrand: cardBrand, 
        cardNumber: cardNumber,
        expDate: expDate,
        cardHolder: cardHolder,
        cvv: cvv,
        billingAdress: billingAddress,
        zipCode: zipCode
      };

    const newPayment = new Schemas.Payments(payment);

    try {
    await newPayment.save(async(err, newPayment) => {
        console.log('New payment created!');
        res.redirect('/')
        res.end('New user payment created!');
    });
    } catch(err) {
        console.log(err);
        res.redirect('/payment-fail')
        res.end('User payment not added!');
    }
});