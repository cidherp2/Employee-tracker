DROP DATABASE IF EXISTS employeeInsects_db;
CREATE DATABASE employeeInsects_db;

USE employeeInsects_db;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR (30) NOT NULL
)

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE SET NULL
)

CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT
manager_id INT
FOREIGN KEY (role_id)
REFERENCES roles (id)
ON DELETE SET NULL,
FOREIGN KEY (manager_id)
REFERENCES employee (id)
)