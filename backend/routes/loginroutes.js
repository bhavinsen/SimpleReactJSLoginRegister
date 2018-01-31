var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
});

connection.connect(function(error){
    if(!error){
        console.log("Database is connected....");
    }else{
        console.log("Error connecting database....");
    }
});

exports.register = function(req, res){
    console.log("req", req.body);

    var today = new Date();
    var users = {
        "first_name": req.body.firstname,
        "last_name": req.body.lastname,
        "email": req.body.email,
        "password": req.body.password,
        "created": today,
        "modified": today,
    };
    connection.query('INSERT INTO users SET ?', users, function(error, results, fields){
        if(error){
            console.log("error occured", error);
            res.send({
               "code": 400,
               "failed": "error occured"
            });
        }else{
            res.send({
                "code": 200,
                "success": "user registered successfully"
            });
        }  
    });
}

exports.login = function(req, res){
    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT * FROM users WHERE email = ?', [email], function(error, results, fields){
        if(error){
            res.send({
              "code": 400,
              "failed" : "error occured"
            });
        }else{
            if(results.length > 0){
                if(results[0].password == password){
                    res.send({
                        "code": 200,
                        "success": "login successfully"
                    });
                }else{
                    res.send({
                        "code": 200,
                        "success": "email and password does not match"
                    })
                }
            }else{
                res.send({
                    "code": 204,
                    "success": "Email does not exists"
                })
            }
        }
    })
}