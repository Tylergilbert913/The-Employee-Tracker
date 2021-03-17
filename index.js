const consoleTable = require("console.table");
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
    inquirer.prompt({

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
            "Quit"
        ]

    }).then((response) => {
        console.log(`This is what you've chosen: ${response.options}`)
        switch (response.options) {
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
                addDepartment();
                break;

            case "Exit":
                connection.end();


        };

    });


    const addRole = () => {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the title of the job being added?",
                name: "title"
            },
            {
                type: "input",
                message: "What is the salary for the new employee?",
                name: "salary"
            },
            {
                type: "input",
                message: "What is the department ID for this new role?",
                name: "roleID"
            }

        ]).then((response) => {
            const title = response.title;
            const salary = response.salary;
            const roleID = response.roleID;

            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: title,
                    salary: salary,
                    roleID: roleID,
                },
                (err) => {
                    if (err) throw err;
                    console.log("Adding a new employee/role");
                    start();
                }
            )
        }
        );
    }

    const addEmployee = () => {
        inquirer.prompt([
            {
                type: "input",
                message: "What's the employee's first name?",
                name: "emFirstName"
            },
            {
                type: "input",
                message: "What's the empolyee's last name?",
                name: "emLastName"
            },
            {
                type: "input",
                message: "What's the employee's ID number?",
                name: "emIDNumber"
            },
            {
                type: "input",
                message: "What's the employee's Manager's ID?",
                name: "emManagerID"
            }
        ]).then((response) => {
            const emFirstName = response.emFirstName;
            const emLastName = response.emLastName;
            const emIDNumber = response.emIDNumber;
            const emManagerID = response.emManagerID;

            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: emFirstName,
                    last_name: emLastName,
                    role_id: emIDNumber,
                    manager_id: emManagerID,
                },
                (err) => {
                    if (err) throw err;
                    console.log("Adding employee");
                    start();
                }
            );
        });
    };

    const addDepartment = () => {
        console.log("FML");
        inquirer.prompt([
            {
                type: "input",
                message: "What department do you want to add?",
                name: "addDepartment"
            }
        ]).then((response) => {
            const addDepartment = response.addDepartment;
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: addDepartment,
                },
                (err) => {
                    if (err) throw err;
                    console.log("added new department");
                    start();
                }
            );
        });

    };


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

    const updateEmployee = () => {
        inquirer.prompt({
            type: "input",
            message: "What is the employee's ID?:",
            name: "updateEmployee"
        }).then((response) => {
            const updateEmployee = response.updateEmployee;
            connection.query(
                `UPDATE employee SET role_id = ?, WHERE role_id = ${response.up}`,
                {
                    name: updateEmployee,
                },
                (err) => {
                    if (err) throw err;
                    console.log("Updated role id");
                    start();
                }
            );
        });

    };









































}
