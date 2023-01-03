// create the team
const generateArticles = (newStaff) => {
    return newStaff.map(member => {
        if (member.officeNumber) {
            return `<article>
                <h2>${member.name}: ${member.role}</h2>
                <ul>
                    <li>ID: ${member.id}</li>
                    <li>Email: <a href="${member.email}">${member.email}</a></li>
                    <li>Office Number: ${member.officeNumber} </li>
                </ul>
            </article>`
        }
        if (member.github) {
            return `<article>
                <h2>${member.name}: ${member.role}</h2>
                <ul>
                    <li>ID: ${member.id}</li>
                    <li>Email: <a href="${member.email}">${member.email}</a></li>
                    <li>GitHub: <a href="https://www.github.com/${member.github}">${member.github}</a></li>
                </ul>
            </article>`
        }
        if (member.school) {
            return `<article>
                <h2>${member.name}: ${member.role}</h2>
                <ul>
                    <li>ID: ${member.id}</li>
                    <li>Email: <a href="${member.email}">${member.email}</a></li>
                    <li>School: ${member.school}</li>
                </ul>
            </article>`
        }
    })
}

const generateTeam = (newStaff) => {
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
    ${generateArticles(newStaff).join('')}
    </main>
    <footer>
    &copy; 2022-2023
    </footer>
</body>
</html>
    `
};

// export function to generate entire page
module.exports = generateTeam;