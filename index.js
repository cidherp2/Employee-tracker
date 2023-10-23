const inquirer = require ('inquirer');
const mysql = require ('mysql2') ;

const init = () => {
    inquirer.prompt ([
        {
        type: 'list',
        name: 'selection',
        choices: [
            'View all departments', 'View all roles', 'View all employees', 'add a department', 'Add a role', 'Update an employee role','Quit'
        ]
        }
    ])
    .then((data) =>{
        switch(`${data.selection}`){
            case 'View all departments':
        }
    })
}