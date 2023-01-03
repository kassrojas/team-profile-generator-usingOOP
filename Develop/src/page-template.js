// create the team
const generateTeamMembers = (team) => {

};

// export function to generate entire page
module.exports = (team) => {
    return `
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
