//use path module
const path = require('path');

//use hbs view engine
const hbs = require('hbs');

const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');


//create connection

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Caroline@97',
    database:'Studentdb'
});




mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB conection succceded.');
    else
    console.log('DB connection failed \n Error : '+ JSON.stringify(err, undefined, 2));


});



//set views file
app.set('views',path.join(__dirname,'views'));

//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
 
//route for homepage
app.get('/',(req, res) => {
  let sql = "SELECT * FROM student";
  let query = mysqlConnection.query(sql, (err, results) => {

    if(err) throw err;


    res.render('display',{
      results: results
    });
  });
});






//route for insert data
app.post('/save',(req, res) => {
  let data = {Name: req.body.Name, RegNo: req.body.RegNo, Age: req.body.Age, Class: req.body.Class};
  let sql = "INSERT INTO student SET ?";
  let query = mysqlConnection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});




//route for update data
app.post('/update',(req, res) => {
  let sql = "UPDATE student SET Name='"+req.body.Name+"', RegNo='"+req.body.RegNo+"', Age='"+req.body.Age+"', Class='"+req.body.Class+"'  WHERE StdID="+req.body.id;
  let query = mysqlConnection.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});






  //route for delete data
  app.post('/delete',(req, res) => {
    let sql = "DELETE FROM student WHERE StdID="+req.body.StdID+"";
    let query = mysqlConnection.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
  });






app.listen(3000, ()=>console.log('Express server is running at port no: 3000'));

