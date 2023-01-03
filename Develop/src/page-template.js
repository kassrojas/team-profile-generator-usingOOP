// create the team
const generateTeam = ({ name, id, email, role, officeNumber, github, school }) => {
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
        <h2>${name}: ${role}</h2>
        <ul>
        <li>ID: ${id}</li>
        <li>Email: <a href="${email}">${email}</a></li>
        <li>Office Number: ${officeNumber} </li>
        </ul>
    </article>
    <article>
        <h2>${name}: ${role}</h2>
        <ul>
        <li>ID: ${id}</li>
        <li>Email: <a href="$email}">${email}</a></li>
        <li>GitHub: <a href="https://www.github.com/${github}">${github}</a></li>
        </ul>
    </article>
    <article>
        <h2>${name}: ${role}</h2>
        <ul>
        <li>ID: ${id}</li>
        <li>Email: <a href="#${email}">${email}</a></li>
        <li>School: ${school}</li>
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

// export function to generate entire page
module.exports = generateTeam();