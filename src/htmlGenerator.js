function employeeCardGenerator(data) {
    let emplCardString = "";
    for(let i = 0; i < data.length; i++) {

        if(data[i].getRole() === "Manager") {
            emplCardString += `<div class="card">
                <div class="card-header">
                    <div class="card-header-title is-centered"> 
                        <p> ${data[i].name} <br> ${data[i].getRole()}</p>
                    </div>
                </div>
                <div class="card-content">
                    <p>ID: ${data[i].id}</p>
                    <p>Email: <a href="mailto:${data[i].email}" target="no_blank">${data[i].email}</a></p>
                    <p>Office Number: ${data[i].officeNumber}</p>
                </div>
            </div>`;
        }
        if(data[i].getRole() === "Engineer") {
            emplCardString += `<div class="card">
                <div class="card-header">
                    <div class="card-header-title is-centered"> 
                        <p> ${data[i].name} <br> ${data[i].getRole()}</p>
                    </div>
                </div>
                <div class="card-content">
                    <p> ID: ${data[i].id}</p>
                    <p>Email: <a href="mailto:${data[i].email}" target="no_blank">${data[i].email}</a></p>
                    <p>Github: <a href="https://github.com/${data[i].github}" target="no_blank">${data[i].github}</a></p>
                </div>
            </div>`;
        }
        if(data[i].getRole() === "Intern") {
            emplCardString += `<div class="card">
                <div class="card-header>
                    <div class="card-header-title is-centered"> 
                        <p> ${data[i].name} <br> ${data[i].getRole()}</p>
                    </div>
                </div>
                <div class="card-content">
                    <p> ID: ${data[i].id}</p>
                    <p>Email: <a href="mailto:${data[i].email}" target="no_blank">${data[i].email}</a></p>
                    <p>School: ${data[i].school}</p>
                </div>
            </div>`;
        }
    }
    return emplCardString;
}

function htmlGenerator(data) {
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${data[1].getName()}'s Team Roster</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        </head>
        <body>
            <header>
                <h1> ${data[1].name}'s Team</h1>
            </header>
            <main>
                <div id="card-holder">
                ${employeeCardGenerator(data)}
                </div>
            </main>
        </body>
    </html>`
}

module.exports = htmlGenerator;