USE employee_db;

-- department table values
INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

-- role table values
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 90000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 150000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Consultant", 120000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 1150000, 4);

-- employee table values
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Leandre", "Byrd", 1, 234);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jamie", "Guillory", 2, 1500);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Murray", 3, 93704);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ben", "Dover", 4, 03948);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
