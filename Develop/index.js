const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/page-template');
const inquirer = require('inquirer');
const fs = require('fs');

// set empty array to add newStaff into
const newStaff = [];

// initial questions for all employees
const employeeInput = async () => {
    const input = await inquirer.prompt([
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
            choices: ["Manager", "Engineer", "Intern"],
            name: 'role',
        },
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
            input.role,
            managerInput.officeNumber, 
            );
            
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
            input.role,
            engineerInput.github, 
            );
            
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
            input.role,
            internInput.school, 
            );
            
            newStaff.push(newIntern);
    }

    console.log(newStaff);

};

async function promptUser () {
    await employeeInput();
    
    const addMembers = await inquirer.prompt ([
        {
            type: "list",
            message: "Select your next step",
            choices: ["Create A New Member", "Create A Team"],
            name: "createNew",
        }
    ])
    
    if (addMembers.createNew === "Create A New Member"){
        return promptUser();
    } else {
        fs.writeFileSync('newTeam.html', generateTeam([...newStaff]))
        console.log('spread operator ', ...newStaff);
        console.log("team is made");
    }
}

promptUser();