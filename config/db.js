const mysql =require("mysql2");
const dbConfig=require("./db.config");

// Set up MySQL connection
const db = mysql.createConnection({
    host: dbConfig.HOST, 
    user: dbConfig.USER,      
    password: dbConfig.PASSWORD,      
    database: dbConfig.DATABASE 
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;