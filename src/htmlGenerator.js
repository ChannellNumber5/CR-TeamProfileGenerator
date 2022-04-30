function employeeCardGenerator(data) {
    let emplCardString = "";
    for(let i = 0; i < data.length; i++) {

        if(data[i].getRole() === "Manager") {
            emplCardString += `<div class="card"> //new change, that we'll try in later code...
            <div class="card-header">
                <h3>${data[i].name}</h3>
                <h4>${data[i].getRole}</h4>
            </div>
            <ul class="empInfo">
                <li>ID: ${data[i].id}</li>
                <li><a href="mailto:${data[i].email}" target="_blank">${data[i].email}</a></li>
                <li>${data[i].officeNumber}</li>
            </ul>
            </div>`;
        }
        if(data[i].getRole() === "Engineer") {
            return `<div class="card">
            <div class="card-header">
                <h3>${data[i].name}</h3>
                <h4>${data[i].getRole}</h4>
            </div>
            <ul class="empInfo">
                <li>ID: ${data[i].id}</li>
                <li><a href="mailto:${data[i].email}" target="_blank">${data[i].email}</a></li>
                <li><a href="https://github.com/${data[i].github}">${data[i].github}</a></li>
            </ul>
            </div>`;
        }
        if(data[i].getRole() === "Intern") {
            return `<div class="card">
            <div class="card-header">
                <h3>${data[i].name}</h3>
                <h4>${data[i].getRole}</h4>
            </div>
            <ul class="empInfo">
                <li>ID: ${data[i].id}</li>
                <li><a href="mailto:${data[i].email}" target="_blank">${data[i].email}</a></li>
                <li>${data[i].school}</li>
            </ul>
            </div>`;
        }
}
}

function htmlGenerator(data) {
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <style>
            header {
                background-color: teal;
                color:whitesmoke;
                max-width: 100%;
                margin: auto;
                padding: 0;
                max-height: 20vw;
            }

            #card-holder {
                flex: wrap;
                justify-content: center;
                display:inline;
            }
            .card {
                max-width: 20vw;
                border: solid 2px black;
                box-shadow: grey 5px;
                margin: 10vw;
            }

            .card-header {
                background-color: darkslategray;
                color:whitesmoke;
                margin: 0;
                padding: 0;
            }

            a:link {
                color:cadetblue;
            }

            a:hover {
                color:black;
            }

            .empInfo li {
                border: solid black 2px;
                margin: auto;
                list-decoration: none;
                text-align: center;
            }
            </style>
            <title>Team Roster</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
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