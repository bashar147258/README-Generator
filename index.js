// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
console.log("To begin generating your project's readme. Please follow the prompts")
// TODO: Create an array of questions for user input
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
        choices:["GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "BSD", "None" ]
        
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        }
        console.log("README Generated sucessfully")
    }); 
}
// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then(answers => {
        const response = generateMarkdown(answers);

        writeToFile("README.md",response);
    })
// Function call to initialize app
init();
