const inquirer = require ('inquirer');
const mysql = require ('mysql2') ;

const menu = () => {
    inquirer.prompt ([
        {
        type: 'list',
        name: 'selection',
        choices: [
            'View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Update an employee role','Add new Employee','Quit'
        ]
        }
    ])
    .then((data) =>{
        switch(`${data.selection}`){
            case 'View all departments':
                view('department');
                break;
            case 'View all roles':
                view('roles');
                break;
            case 'View all employees':
                view('employees');
                break;
            case 'Add new Employee':
                addEmployee();
                break;
            case 'Add a department':
                addDepartment()
                break;
             case 'Add a role':
                addRole();
                break;
             case 'Update an employee role':
                updateEmployeeInfo();
                break;
            case 'Quit':
                process.exit(0)
                break;
                
                
        }
    })
    .catch(error =>console.log(error));
}

const connection = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Telecaster12',
        database: 'employeeInsects_db'
},
);

const view = (data)=>{ 
    const query = `SELECT * FROM ${data}`;
    connection.query(query,(err,rows) => {
        if (err){
            console.log(err);
            return;
        }
        console.table(rows)
        menu();
    })
}

const addFunction = (queries,values) => {
    connection.query(queries,values,err =>{
        if (err) {
            console.log(err);
            return;
        }

        console.info('added succesfully ');
        menu();
    })
}

const addDepartment = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'department',
            message: 'Write the department you want to add'
        }
    ])
    .then((answers) =>{
        const query = `INSERT INTO department (department_name) VALUE (?)`
        addFunction(query,answers.department);
    })
    .catch(err =>{
        console.log(err.message);
        menu();
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'title',
            message: 'What is the name of the position'
        },
        {
            type: 'number',
            name:'salary',
            message: 'Input the salary for the position'
        },
        {
            type:'number',
            name: 'department',
            message: 'set the department id for the position'
        }
    ])

    .then((answers) => {
        const values = [answers.title,answers.salary,answers.department];
        const query = `INSERT INTO roles (title,salary,department_id) VALUES (?,?,?)`
        addFunction(query,values);
    } )
    .catch((err) =>{
        console.error(err.message);
        menu ();
    })
}

function addEmployee(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: `Enter employee's name`
        },
        {
            type: 'input',
            name: 'last_name',
            message: `Enter employee's last name`
        },
        {
            type: 'number',
            name: 'roleID',
            message: `Enter the ID for the role of this new employee`
        },
        {
            type: 'number',
            name: 'managerID',
            message: `Enter the manager ID for the new employee`,
        },
    ])
    .then((answer)=>{
        const values = [answer.first_name,answer.last_name,answer.roleID,answer.managerID];
        const query = `INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`;
        addFunction(query,values);
    })
    .catch((err)=>{
        console.error(err.message);
    });
};

const updateEmployeeInfo = () =>{
    inquirer.prompt([
        {
            type: 'number',
            name: 'employee_id',
            message: 'Enter the employee´s id you want to update'
        },
        {
            type: 'number',
            name:'role',
            message: 'Enter employee´s new role ID'
        },
        
    ])
    .then((answers) =>{
        //const values = [answers.employee_id, answers.role];
        connection.query(`UPDATE employees SET role_id = ? WHERE id = ?`, [answers.role,answers.employee_id])
        menu();
    })
    .catch((err) => {
        console.error(err.message);
    })
}   

menu();