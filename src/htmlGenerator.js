function employeeCardGenerator(data) {
    if(data.getRole() === "Manager") {
        return `<div class="card">
        <div class="card-header">
            <h3>${data.name}</h3>
            <h4>${data.getRole}</h4>
        </div>
        <ul class="empInfo">
            <li>ID: ${data.id}</li>
            <li><a href="mailto:${data.email}" target="_blank">${data.email}</a></li>
            <li>${data.officeNumber}</li>
        </ul>
        </div>`;
    }
    if(data.getRole() === "Engineer") {
        return `<div class="card">
        <div class="card-header">
            <h3>${data.name}</h3>
            <h4>${data.getRole}</h4>
        </div>
        <ul class="empInfo">
            <li>ID: ${data.id}</li>
            <li><a href="mailto:${data.email}" target="_blank">${data.email}</a></li>
            <li><a href="https://github.com/${data.github}">${data.github}</a></li>
        </ul>
        </div>`;
    }
    if(data.getRole() === "Intern") {
        return `<div class="card">
        <div class="card-header">
            <h3>${data.name}</h3>
            <h4>${data.getRole}</h4>
        </div>
        <ul class="empInfo">
            <li>ID: ${data.id}</li>
            <li><a href="mailto:${data.email}" target="_blank">${data.email}</a></li>
            <li>${data.school}</li>
        </ul>
        </div>`;
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
            <title></title>
        </head>
        <body>
            <header>
                <h1></h1>
            </header>
            <main>
    
            </main>
        </body>
    </html>`
}