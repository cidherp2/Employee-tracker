const inquirer = require ('inquirer');
const mysql = require ('mysql2') ;

const menu = () => {
    inquirer.prompt ([
        {
        type: 'list',
        name: 'selection',
        choices: [
            'View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Update an employee role','Quit'
        ]
        }
    ])
    .then((data) =>{
        switch(`${data.selection}`){
            case 'View all departments':
                break;
            case 'View all roles':
                break;
            case 'View all employees':
                break;
            case 'Add a department':
                break;
            case 'Add a role':
                 break;
             case 'Add a role':
                break;
             case 'Update an employee role':
                break;
            case 'Quit':
                break;
                
                
        }
    })
}