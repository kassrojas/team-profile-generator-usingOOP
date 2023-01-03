const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const prompt = inquirer.createPromptModule();

const writeToFile = ({ html }) => {
    try {
        fs.writeFileSync(html);
        console.log('Success!');
    } catch (err) {
        console.log(err);
    }
};


prompt([
    {
        message: 'What is your name?',
        name: 'name',
    },
    {
        message: 'What is your id?',
        name: 'id',
    },
    {
        message: 'What is your email?',
        name: 'email',
    },
])
    .then(generateHTML)
    .then(writeToFile)
    .catch(err => console.log(err));