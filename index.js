// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repo? (Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            }
            else{
                console.log('Please enter your repo title.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please enter a description of your project. (Required)',
        validate: descInput => {
            if(descInput){
                return true;
            }
            else{
                console.log('Please enter a description of your project')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)(Required)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Other'],
        validate: languagesInput => {
            if(languagesInput != ""){
                return true;
            }
            else{
                console.log('Please select languags used to build your project.')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select license used from below or select None (Required)',
        choices: ['mit', 'gnu', 'None'],
        validate: licenseInput => {
            if(licenseInput != ""){
                return true;
            }
            else{
                console.log('Please select license used to build your project, if applicable.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the link to your deployed project. (Optional)'
    },
    {
        type: 'input',
        name: 'instal',
        message: 'Are there any steps needed to use your project beyond cloning the code? (Optional)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter instructions for using your project and/or examples of usage. (Optional)'
    },
    {
        type: 'input',
        name: 'contri',
        message: 'Please enter guidlines for contributing to your project. (Optional)'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter instructions for testing your project. (Optional)'
    },
    {
        type: 'input',
        name: 'git',
        message: 'Please enter your github username. (Optional)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (Optional)'
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    return new Promise((resolve,reject) => {
        console.log(fileName,data)
        fs.writeFile(fileName, data, err => {
            if(err){
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: 'File Created'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    //ask the user questions to get data
    return inquirer.prompt(questions)
}

// Function call to initialize app
init().then(
    //send answers to the generateMArkdown function
    answers => {return generateMarkdown(answers)})
    .then(
        //send the returned markdown page to the write file function
        data => {writeToFile('./GeneratedREADME.md', data)})
    .then(successfulResponse => {
        // this will run when we use `resolve()` - for testing
        console.log(successfulResponse);
        })
    .catch(errorResponse => {
        // this will run when we use `reject()` - for testing
        //
        });