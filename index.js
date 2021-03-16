
const inquirer = require('inquirer');
const mysql = require("mysql");
const conTab = require("console.table");


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_db'
})
connection.connect(err => {
    if (err) throw err;
    console.log(`We connected! Connected as thread id ${connection.threadId}`);
    searchParams();
    
});

function init() {
    inquirer.prompt([







    ])








































}
init();