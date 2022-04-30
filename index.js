const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/teamManager");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern");
const HtmlGenerator = require("./src/htmlGenerator.js");

const teamList = [];

function init(){
inquirer
    .prompt([
        {type:"input",
        name: "managerName",
        message: "Hello Team Manager! Please Enter your Name:"
        },
        {type:"input",
        name: "managerID",
        message: "Please Enter your Employee ID Number"
        },
        {type:"input",
        name: "managerEmail",
        message: "Please Enter your Email Address:"
        },
        {type:"input",
        name: "managerOfficeNumber",
        message: "Please Enter your Office Number:"
        },
    ])
    .then((data) => {
        if (data.managerName === undefined || data.managerId === undefined || data.managerEmail === undefined|| data.managerOfficeNumber === undefined){
            console.log("Please rerun script and input correct data for name, ID, email and Office Number");
            init();
        } else {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)
            teamList.push(manager);
            teamMenu();
        }
    })
}

function teamMenu() {
    inquirer
    .prompt([
        {type:"list",
        name: "toDoNext",
        message: "Please select from the following options:",
        choices:["Create New Intern Employee Profile", "Create New Engineer Employee Profile", "Finish Creating my Team"]
        }
    ])
    .then((data) => {
        if(data.toDoNext === "Create New Intern Employee Profile"){
            createIntern();
        } else if (data.toDoNext === "Create New Engineer Employee Profile"){
            createEngineer();
        } else {
            teamFinished();
            consolelog("Team has been created!")
        }
    })

}

function createIntern() {
    inquirer
        .prompt([
            {type:"input",
            name: "internName",
            message: "New Intern Employee Card Creation Mode: \n Please Enter the Intern's Name:"
            },
            {type:"input",
            name: "internID",
            message: "Please Enter the Intern's Employee ID Number"
            },
            {type:"input",
            name: "internEmail",
            message: "Please Enter the Intern's Email Address:"
            },
            {type:"input",
            name: "school",
            message: "Please Enter the Intern's Current School/University:"
            },
        ])
        .then((data) => {
            const intern = Intern(data.internName, data.internID, data.internEmail, data.school)
            teamList.push(intern);
            teamMenu;
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {type:"input",
            name: "engName",
            message: "New Engineer Employee Card Creation Mode: \n Please Enter the Engineer's Name:"
            },
            {type:"input",
            name: "engID",
            message: "Please Enter the Engineer's Employee ID Number"
            },
            {type:"input",
            name: "engEmail",
            message: "Please Enter the Engineer's Email Address:"
            },
            {type:"input",
            name: "github",
            message: "Please Enter the Engineer's Github Username:"
            },
        ])
        .then((data) => {
            const engineer = new Engineer(data.engName, data.engID, data.engEmail, data.github)
            teamList.push(engineer);
            teamMenu();
        });
}

function teamFinished(){
    HtmlGenerator(teamList);
}