// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Link to page where README is developed 
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: input,
            name: 'github',
            message: 'What is your GitHub Username?',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('Enter your GitHub Username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
            validate: emailInput =>{
                if (emailInput){
                    return true;
                } else{
                    console.log('Enter your e-mail address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if(titleInput){
                    return true;
                } else{
                    console.log('Please enter the title for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a short description of your project",
            validate: descriptioinInput => {
                if (descriptioinInput){
                    return true;
                } else {
                    console.log('Please provide a short description of your project');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license does your project have?',
            choices: ['MIT', 'GNU', 'Apache', 'GPL'],
            default: ['MIT'],
            validate: licenseInput => {
                if (licenseInput){
                    return true;
                } else {
                    console.log('Please choose a license');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'If applicable, list the steps required to install your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a short description on how to use the app'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What commands should be run to execute tests?',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Provide guidelines for users about contributing to the repo'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
