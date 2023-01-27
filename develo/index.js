const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const generatePage = require('./generatePager');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'assets');
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const teamMimers = [];

const managProm = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name?",
        },
        {
            type: "input",
            name: "id",
            message: "What's your Employee ID number?",
        },{
            type: "input",
            name: "email",
            message: "What's your E-Mail address?",
        },{
            type: "input",
            name: "offiNumber",
            message: "What's your Office Number?",
        },
    ]
    ).then(answers => {
        const manager = new Manager(
            answers.name, answers.id, answers.email, answers.offiNumber,
        )
        teamMimers.push(manager);
        addEmployee();
    })
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "roLe",
            message: "Do you want to add an Intern or and Engineer?",
            choices: ["Add Engineer", "Add Intern", "Team Complete"]
        }
    ]).then(uChoice => {
        switch (uChoice.roLe) {
            case "Add Engineer":
                enginPrompt();
                break;
            case "Add Intern":
                InPrompt();
                break;
            default:
                temBuild();
        }
    })
}

const enginPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name Mister or Miss Engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What's your Employee ID number?"
        },{
            type: "input",
            name: "email",
            message: "What's your E-Mail address?"
        },{
            type: "input",
            name: "gitty",
            message: "What's your GitHub User?"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitty);
        teamMimers.push(engineer);
        addEmployee();
    })
}

const InPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name Mister or Miss Intern?"
        },{
            type: "input",
            name: "id",
            message: "What's your Employee ID number?"
        },{
            type: "input",
            name: "email",
            message: "What's your E-Mail address?"
        },{
            type: "input",
            name: "school",
            message: "What school are you attending at present?"
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMimers.push(intern);
        addEmployee();
    })
}

const temBuild = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generatePage(teamMimers), "utf-8");
}
managProm();