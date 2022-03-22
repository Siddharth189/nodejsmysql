import mysql from "mysql2";
// const mysql = require("mysql2");

let con;
export default con = mysql.createConnection({
    host: 'localhost',
    user: 'siddharth',
    password: "12345678",
    database: "database_test_mysql"
});



// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
    
//     let sql1 = "CREATE TABLE geeksforgeeks "
//     + "(id INT AUTO_INCREMENT PRIMARY KEY," +
//     " name VARCHAR(255), address VARCHAR(255))";

//     let sql2 = "INSERT INTO geeksforgeeks (name, "
//         + "address) VALUES ('Company Inc', "
//         + "'Highway 37')";

//     let sql3 = "SELECT * FROM geeksforgeeks "
//         + "WHERE address = 'Highway 37'";

//         con.query(sql1, function (err, result) {
//             if (err) throw err;
//             console.log("Table created");
//         });
      
//         con.query(sql2, function (err, result) {
//             if (err) throw err;
//             console.log("Insertion Successful");
//         });
      
//         con.query(sql3, function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         });
// });

