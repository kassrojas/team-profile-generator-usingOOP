const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
]).then((input) => {
    console.log(input);
});