const conTab = require("console.table");
const inquirer = require('inquirer');
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_db'
});
connection.connect(err => {
    if (err) throw err;
    console.log(`We connected! Connected as thread id ${connection.threadId}`);
    
    start();

});

const start = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "options",
            choices: [
                "View all employees",
                "View all employees by department",
                "Add employee",
                "Update employee role",
                "View all roles",
                "Add role",
                "View all departments",
                "Add department",
                "Quit",
            ]
        }
    ]).then((response) => {
        console.log(`This is what you've chosen: ${response.options}`)
        switch (response.choices) {
            case "View all employees":
                viewAllEmployees();
                break;

            case "View all employees by department":
                employeesByDepart();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Update employee role":
                updateEmployee();
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "Add role":
                addRole();
                break;

            case "View all departments":
                viewAllDepartments();
                break;

            case "Add Department":
                addDerpartment();
                break;

            case "Exit":
                connection.end();


        }

    });


    const viewAllEmployees = () => {

        console.log("View a list of employees");
        connection.query("SELECT * FROM employee", (err, data) => {
            if (err) throw err;
            console.table(data);
            start();
        });
    };

    const employeesByDepart = () => {

        console.log("View a list of employees");
        connection.query("SELECT * FROM department", (err, data) => {
            if (err) throw err;
            console.table(data);
            start();
        });
    };

    const viewAllRoles = () => {

        console.log("View a list of employees");
        connection.query("SELECT * FROM role", (err, data) => {
            if (err) throw err;
            console.table(data);
            start();
        });
    };



    








































}
init();