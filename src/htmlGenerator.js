function employeeCardGenerator(data) {
    let emplCardString = "";
    for(let i = 0; i < data.length; i++) {

        if(data[i].getRole() === "Manager") {
            emplCardString += `<div class="column is-one-quarter">
                <div class="card-header">
                    <div class="card-header-title is-centered"> 
                        <p> ${data[i].name} <br> ${data[i].getRole()}</p>
                    </div>
                </div>
                <div class="card-content box">
                    <p>ID: ${data[i].id}</p>
                    <p>Email: <a href="mailto:${data[i].email}" target="no_blank">${data[i].email}</a></p>
                    <p>Office Number: ${data[i].officeNumber}</p>
                </div>
            </div>`;
        }
        if(data[i].getRole() === "Engineer") {
            emplCardString += `<div class="column is-one-quarter">
                <div class="card-header">
                    <div class="card-header-title is-centered"> 
                        <p> ${data[i].name} <br> ${data[i].getRole()}</p>
                    </div>
                </div>
                <div class="card-content box">
                    <p>ID: ${data[i].id}</p>
                    <p>Email: <a href="mailto:${data[i].email}" target="no_blank">${data[i].email}</a></p>
                    <p>Github: <a href="https://github.com/${data[i].github}" target="no_blank">${data[i].github}</a></p>
                </div>
            </div>`;
        }
        if(data[i].getRole() === "Intern") {
            emplCardString += `<div class="column is-one-quarter">
                <div class="card-header">
                    <div class="card-header-title is-centered"> 
                        <p> ${data[i].name} <br> ${data[i].getRole()}</p>
                    </div>
                </div>
                <div class="card-content box">
                    <p>ID: ${data[i].id}</p>
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
            <title>${data[0].getName()}'s Team Roster</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <style>
            header {
                height: 10vw;
            }
            h1 {
                font-weight: bold;
                text-align: center;
                padding: 3.5vw 0;
            }
            #card-holder {
                /* display: inline-flex; */
                flex-wrap: wrap;
            }
            .card-header {
                background-color: grey;

            }
            .card-content {
                box-sizing: border-box;
            }
            .card-content p {
                background-color: lightgray;
                margin: 1px 0;
                box-sizing: border-box;
                line-height: 1.5;
                word-wrap: normal;
                text-overflow: none;
            }
            </style>
        </head>
        <body>
            <header class="panel is-primary columns is-xcentered">
                <div class="panel-heading column">
                    <h1 class="is-xcentered">${data[0].name}'s Team</h1>
                </div>
            </header>
            <main class="container">
                <div id="card-holder" class="columns is-3 is-ycentered is-multiline">
                ${employeeCardGenerator(data)}
                </id=>
            </main>
        </body>
    </html>`
}

module.exports = htmlGenerator;