
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

                        case 
        }

    }




    ])








































}
init();