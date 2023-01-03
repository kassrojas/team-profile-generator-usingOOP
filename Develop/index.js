const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const generateTeamMembers = require('./src/page-template');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const fs = require('fs');

// set empty array to add newStaff into
const newStaff = [];

// initial questions for all employees
const questions = async () => {
    const input = await inquirer
    .prompt([
        {
            message: 'What is your name?',
            name: 'name',
        },
        {
            message: 'What is your ID number?',
            name: 'id',
        },
        {
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'What is your current role?',
            choices: ["Manager", "Engineer", "Intern", "I'm done building my team!"],
            name: 'role',
        }
    ])
    
    // if Manager is selected
    if (input.role === 'Manager'){
        const managerInput = await inquirer
        .prompt ([
            {
                message: 'What is your office number?',
                name: 'officeNumber',
            },
        ])
    
        const newManager = new Manager(
            input.name,
            input.id, 
            input.email,
            input.officeNumber, 
        );
        
        //adds newManager to newStaff array
        newStaff.push(newManager);
    }
    // if Engineer is selected
    if (input.role === 'Engineer'){
        const engineerInput = await inquirer
        .prompt ([
            {
                message: 'What is your GitHub username?',
                name: 'github',
            },
        ])
    
        const newEngineer = new Engineer(
            input.name,
            input.id, 
            input.email,
            input.github, 
        );
        
        //adds newEngineer to newStaff array
        newStaff.push(newEngineer);
    }
    // if Intern is selected
    if (input.role === 'Intern'){
        const internInput = await inquirer
        .prompt ([
            {
                message: 'What is your school\'s name?',
                name: 'school',
            },
        ])
    
        const newIntern = new Intern(
            input.name,
            input.id, 
            input.email,
            input.school, 
        );
        
        //adds newManager to newStaff array
        newStaff.push(newIntern);
    }
}