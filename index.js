
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");
console.log("To begin generating your project's readme. Please follow the prompts")

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project title...",
        
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description...",
        
    },
    {
        type: "input",
        name: "usage",
        message: "Enter project usage...",
        
    },
    {
        type: "input",
        name: "installation",
        message: "Enter project installation instructions...",
        
    },
    {
        type: "list",
        name: "license",
        message: "Enter license used...",
        choices:["GNU Public License v3.0", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "BSD", "None" ]
        
    },
    {
        type: "input",
        name: "test",
        message: "Enter project test intructions...",
        
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter project contribution guidelines...",
        
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email...",
        
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username...",
        
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        }
        console.log("README Generated sucessfully")
    }); 
}

function init() {}
    inquirer.prompt(questions).then(answers => {
        const response = generateMarkdown(answers);

        writeToFile("README.md",response);
    })

init();
