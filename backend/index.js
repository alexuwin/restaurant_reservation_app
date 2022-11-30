//dev script (in package.json) can be called live or build instead of "dev" once completed
//testBranch
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Payments = require('./models/Payments.js');
const Users = require('./models/Users.js');
const TableAudit = require('./models/TableAudit.js');
const session = require('express-session');
const { Router, response } = require('express');
require('dotenv/config'); //enables using .env file

const app = express();

app.use(bodyParser.json());
app.use(express.json()); //added
app.use(bodyParser.urlencoded({extended:true})); //modified, false to true
app.use(express.static('public')); //added

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

// app.set('view engine', 'ejs');
// app.get('/',function(req,res){
//     res.render('reserve.ejs');
// });

// app.post('/genTable',function(req,res){
//     console.log("trial");
//     res.redirect('/login-fail');
// })

var database

app.post('/genTable',function(req,res) {
    //HIGH TRAFFIC
    var highTraffic = false;
    console.log(req.body.highTraffic)
    if(req.body.highTraffic=="on"){
        highTraffic = true;
    }
    req.session.highTraffic = highTraffic;

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const phone = req.body.phone;
    const comment = req.body.comment;

    const totalGuest=req.body.totalGuest;
    console.log(totalGuest);
    const resDate = req.body.resDate;
    console.log(resDate);
    const timeFrame = req.body.timeFrame;
    console.log(timeFrame);


    var availTables = new Array;
    var occupied = new Array;
    var availCapacity;

    var tablesArray = ['t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11'];
    var tableCapacity = [2,2,2,2,4,4,4,4,6,6,8];
    var tableFlag = [true,true,true,true,true,true,true,true,true,true,true];
    
    function findTable(tablesArray,tableCapacity,tableFlag,totalGuest){
        var resultSet = new Array;
        var count = 0;
        resultSet[count]=new Array;
        for(let i=0;i<tablesArray.length;i++){
            let sum = 0;
            if(tableFlag[i]==false){break;}
            for(let j=i;j<tablesArray.length;j++){
                if(tableFlag[j]==false){break;}
                sum+=tableCapacity[j];
                resultSet[count].push(tablesArray[j]);
                if(sum>=totalGuest){
                    //last digit storing the sum
                    resultSet[count].push(sum);
                    count++;
                    resultSet[count]= new Array;
                    break;
                }
            }
        }
        return resultSet;
    }

    var tablesSet = findTable(tablesArray,tableCapacity,tableFlag,totalGuest);

    function findSet(tablesSet,tablesArray,tableCapacity,tableFlag,totalGuest,availTables,occupied,availCapacity){
    
    var initialCapacity = 0;
    for(let i=0;i<tablesArray.length;i++){
        initialCapacity+=tableCapacity[i];
    }

    var tableSetLength = (tablesSet.length)-1;

    console.log("TRIAL HERE");

    for(let i=0;i<tableSetLength;i++){
        console.log(tablesSet[i]);
    }
    
    //find tables set with least number of tables
    var numOfTables = new Array;
    //find tables set with least different in sum
    var differentArray = new Array;
    for(let i = 0;i<tableSetLength;i++){
        var lastDigitPos = (tablesSet[i].length)-1;
        //last elelment pos also the length of each set
        numOfTables[i]=lastDigitPos;
        differentArray[i]=tablesSet[i][lastDigitPos]-totalGuest;
    }

    for(let i=0;i<tableSetLength;i++){
        console.log(differentArray[i]);
    }

    for(let i=0;i<tableSetLength;i++){
        console.log(numOfTables[i]);
    }

    console.log(tableSetLength);

    var temp = new Array;

    for(let i=0;i<tableSetLength;i++){
        temp[i]=differentArray[i]+numOfTables[i];
    }

    var getMinVal = Math.min(...temp);
    var getMinIndex = temp.indexOf(getMinVal);

    console.log("Final answer set");
    console.log(tablesSet[getMinIndex])
    
    //now from the tablesSet push to occupied array and set avail false for choosen tables
    console.log("TRIAL");
    for(let i=0;i<(tablesSet[getMinIndex].length)-1;i++){
        var getTblName = tablesSet[getMinIndex][i];
        //console.log(getTblName);
        var getTblPos = tablesArray.indexOf(getTblName);
        if(getTblPos>-1){
            tableFlag[getTblPos]=false;
            occupied.push(getTblName);
        }
    }

    for(let i=0;i<tablesArray.length;i++){
        if(tableFlag[i]==true){
            availTables.push(tablesArray[i]);
        }
    }

    availCapacity = initialCapacity - tablesSet[getMinIndex][(tablesSet[getMinIndex].length)-1];
    console.log("AVAIL CAPACITY");
    console.log(availCapacity);

    return availCapacity;
    }

    availCapacity = findSet(tablesSet,tablesArray,tableCapacity,tableFlag,totalGuest,availTables,occupied,availCapacity)

    //CHECK IF THERE IS ALREADY RESERVATION MADE ON THAT TIME FRAME
    TableAudit.findOne({resDate:resDate,timeFrame:timeFrame,lastestUpdate:true}).then((result)=>{
        
        //WHEN THERE ARE OTHER RESERVATION ON THE DATE
        console.log(result.resDate)
        console.log(result.availCapacity)
        //check if the number of guest exceed the available capacity
        if(totalGuest>result.availCapacity){
            console.log("Exceed capacity!")
            res.redirect('/reserve2');
        }
        else{//IF THERE STILL SPACE
            var availableTblsArray = result.availTables; //ARRAY 1
            var lengthOfArray = availableTblsArray.length;
            //generate new capacity arrays for remain tables
            var newTableCapacity = new Array; //ARRAY 2
            //generate new flag arrays for ramian tables
            var newFlag = new Array;
            for(let i=0;i<lengthOfArray;i++){
                var pos = tablesArray.indexOf(availableTblsArray[i])
                newTableCapacity[i]=tableCapacity[pos];
                newFlag[i]=true;
            }
            
            var newTableSet = findTable(availableTblsArray,newTableCapacity,newFlag,totalGuest)
            
            var newAvailTables = new Array;
            var newOccupied = new Array;
            var newAvailCapacity;
            newAvailCapacity = findSet(newTableSet,availableTblsArray,newTableCapacity,newFlag,totalGuest,newAvailTables,newOccupied,newAvailCapacity)


            //NOV 29 
            //SESSION SAVE

            req.session.totalGuests = totalGuest,
            req.session.resDate = resDate,
            req.session.timeFrame = timeFrame,
            req.session.availTables = newAvailTables,
            req.session.occupied = newOccupied,
            req.session.availCapacity = newAvailCapacity,
            req.session.lastestUpdate = true,
            req.session.fname = fname,
            req.session.lname = lname,
            req.session.email = email,
            req.session.phone = phone,
            req.session.comment = comment

            if(newOccupied.length>1){
                req.session.combineTbl = true;
            }else{
                req.session.combineTbl = false;
            }

            console.log("TRIAL ON THE SESSION SAVE")
            console.log(req.session.totalGuests)
            console.log(req.session.combineTbl)

            if(req.session.guest){
                res.redirect('/prompt-guest')
            } else {
                res.redirect('/fee')
                res.end();
            }
            //NOV 29



            
            //COMMENT OUT BUT WANT TO SAVE
            // const newBooking2 = new TableAudit({
            //     totalGuests: totalGuest,
            //     resDate:resDate,
            //     timeFrame:timeFrame,
            //     availTables: newAvailTables,
            //     occupied: newOccupied,
            //     availCapacity: newAvailCapacity,
            //     lastestUpdate: true,
            //     fname:fname,
            //     lname: lname,
            //     email: email,
            //     phone: phone,
            //     comment: comment
            // });

            // console.log(newBooking2)

            // newBooking2.save(async(err2, newRes)=>{
            //     if(err2){
            //         console.log(err2);
            //     }else{
            //         console.log('Added new res!');
            //     }
            //     res.redirect('/fee')
            //     res.end();
            // })
            //COMMENT OUT BUT WANT TO SAVE
        }




    }).catch(async(err)=>{

        //WHEN NO RESERVATION ON THE DATE
        console.log("No reserve on the date")
        

         //NOV 29 
        //SESSION SAVE

        req.session.totalGuests = totalGuest,
        req.session.resDate = resDate,
        req.session.timeFrame = timeFrame,
        req.session.availTables = availTables,
        req.session.occupied = occupied,
        req.session.availCapacity = availCapacity,
        req.session.lastestUpdate = true,
        req.session.fname = fname,
        req.session.lname = lname,
        req.session.email = email,
        req.session.phone = phone,
        req.session.comment = comment
       

        if(occupied.length>1){
            req.session.combineTbl = true;
        }else{
            req.session.combineTbl = false;
        }

        console.log("TRIAL ON THE SESSION SAVE")
        console.log(req.session.totalGuests)
        console.log(req.session.combineTbl)
        if(req.session.guest){
            res.redirect('/prompt-guest')
        } else {
            res.redirect('/fee')
            res.end();
        }
        //NOV 29
        
        


        ////COMMENT OUT BUT WANT TO SAVE
        // const newBooking = new TableAudit({
        //     totalGuests: totalGuest,
        //     resDate: resDate,
        //     timeFrame: timeFrame,
        //     availTables: availTables,
        //     occupied: occupied,
        //     availCapacity: availCapacity,
        //     lastestUpdate: true,
        //     fname:fname,
        //     lname: lname,
        //     email: email,
        //     phone: phone,
        //     comment: comment
        // });
        // console.log(newBooking)

        // await newBooking.save(async(err2, newRes)=>{
        //     if(err2){
        //         console.log(err2);
        //     }else{
        //         console.log('Added new res!');
        //     }
        //     res.redirect('/fee')
        //     res.end();
        // })
        //COMMENT OUT BUT WANT TO SAVE
        
    })
    
});

// app.get('/results',function(req,res){
//     // res.json('This is trial')
//     TableAudit.findOne({lastestUpdate:true}).then((result)=>
//     {
//         res.json(result.occupied)
//     })
// })

app.post('/guest', function(req, res){
    req.session.guest = true;
    req.session.user = '';
    req.session.userID = '';
    res.redirect('/reserve');
    res.end();
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Users.findOne({username:username}).then((result)=>{
        if (password != result.password) {
            console.log('Wrong password')
            res.redirect('/login-fail');
            res.end();
        } else {
            console.log('Login successful!')
            req.session.guest = false;
            req.session.user = username
            req.session.userID = result._id
            if (req.session.resDate) {
                res.redirect('/fee')
                res.end();
            } else {
                res.redirect('/reserve');
                res.end();
            }
        }
    }).catch((err) => {
        console.log(err);
        res.redirect('/login-fail');
        res.end();
    })
    /*Users.findOne({username:username},{_id: false}).then((result)=>{
        res.send(result.password);
    }).catch((err) => {
        console.log(err);
    })*/
});

app.post('/register', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const user = new Users({username: username, 
                  password: password,
                  name: name, 
                  email: email,
                  isGuest: false
                });

    Users.findOne({username:username}).then((result)=>{
        if(!result){
            //console.log('User does NOT exist.');
            try {
                user.save( async(err, newUserResult) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('New user created!');
                    }
                    res.redirect('/login')
                    res.end();
                });
            } catch(err) {
                console.log(err);
                res.redirect('/register-fail')
                res.end('User could not be added!');
            }
        } else {
            console.log('User already exists!');
            res.redirect('/register-fail')
            res.end();
        }
    }).catch((err) => {
        console.log(err);
    })
});

app.post('/fee', async (req, res) => {
    const paymentType = req.body.paymentType;
    const cardBrand = req.body.cardBrand;
    const cardNumber = req.body.cardNumber;
    const expDate = req.body.expDate;
    const cardHolder = req.body.cardHolder;
    const cvv = req.body.cvv;
    const billingAddress = req.body.billingAddress;
    const zipCode = req.body.zipCode;
    const dinerNum = req.body.dinerNum;
    const mailingAddress = req.body.mailingAddress;
    const points = req.body.points;
    
    const highTraffic = req.session.highTraffic;
    

    console.log("RS trial");
    console.log(req.session.occupied)
    

    const payment = new Payments({paymentType: paymentType,
                        cardBrand: cardBrand, 
                        cardNumber: cardNumber,
                        expDate: expDate,
                        cardHolder: cardHolder,
                        cvv: cvv,
                        billingAddress,
                        zipCode: zipCode,
                        dinerNum: dinerNum,
                        points: points,
                        mailingAddress,
                        highTraffic: highTraffic
                    });

    //const newPayment = new Schemas.Payments(payment);
    console.log(payment);

    try {
        await payment.save(async(err, newPaymentResult) => {
            if (err) {
                console.log(err);
            } else {
                //NOV 29 RS ADD SAVING TO AUDIT TBL AFTER THE PAYMENT WENT THROUGH

                TableAudit.findOneAndUpdate({resDate:req.session.resDate,timeFrame:req.session.timeFrame,lastestUpdate:true},{lastestUpdate:false}).then((result)=>{
                    console.log("TESTING FINDONEUPDATE")
                    console.log(result.fname);
                });
    
                const newBooking = new TableAudit({
                    totalGuests : req.session.totalGuests,
                    resDate : req.session.resDate,
                    timeFrame : req.session.timeFrame,
                    availTables : req.session.availTables,
                    occupied: req.session.occupied,
                    availCapacity : req.session.availCapacity,
                    lastestUpdate : req.session.lastestUpdate,
                    fname : req.session.fname,
                    lname : req.session.lname,
                    email : req.session.email,
                    phone : req.session.phone,
                    comment : req.session.comment,
                    combineTbl : req.session.combineTbl
                });

                await newBooking.save(async(err2,newRes)=>{
                    if(err2){
                        console.log(err2);
                    }else{
                        console.log('Added the reservation tables info');
                    }
                })

                //NOV 29 
            
                console.log('New payment created!');
            }
            res.redirect('/thank-you')
            res.end('New user payment created!');
        });
    } catch(err) {
        console.log(err);
        console.log('caught error in fee!')
        res.redirect('/fee-fail')
        res.end('User payment not added!');
    }
});