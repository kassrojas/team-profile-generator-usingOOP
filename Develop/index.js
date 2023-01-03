// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
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

const generateHTML = (input) => {
    return {
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
    <title>Team Generator</title>
    
</head>
<body>
    <header>
    <h1>My Team</h1>
    </header>
    <main>
    <article>
        <h2>Manager</h2>
        <ul>
        <li>ID: ${input.id}</li>
        <li>Email: <a href="${input.email}">${input.email}</a></li>
        <li>Office Number: ${input.officeNum}</li>
        </ul>
    </article>
    <article>
        <h2>Engineer</h2>
        <ul>
        <li>ID: ${input.id}</li>
        <li>Email: <a href="${input.email}">${input.email}</a></li>
        <li>GitHub: <a href="https://www.github.com/${input.github}">${input.github}</a></li>
        </ul>
    </article>
    <article>
        <h2>Intern</h2>
        <ul>
        <li>ID: ${input.id}</li>
        <li>Email: <a href="#${input.email}">${input.email}</a></li>
        <li>School: ${input.school}</li>
        </ul>
    </article>
    </main>
    <footer>
    &copy; 2022-2023
    </footer>
</body>
</html>
    `
    };
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