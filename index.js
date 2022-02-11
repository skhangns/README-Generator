// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: ' What is the use of this app?',
    },
    {   type: "input",
    name: "install",
    message: "Which steps were implemented to install your project?"

    },
    {
        type: "input",
        name: "test",
        message: "What tests if/any can be performed?"
    },
    {
        type:"list",
        name: "license",
        message: "What license was used in your work?",
        choices: ["MIT", "Mozilla", "GPL", "Apache"]
    },
    {
        type: 'input',
        name: 'userEmail',
        messsage: 'What is the best email to reach you?',
    },
    {
        type: 'input',
        name: 'githubName',
        messsage: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributor(s) for this project?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    )}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
