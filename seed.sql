USE employed_db;

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
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 90000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 150000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Consultant", 120000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 1150000, 4);

