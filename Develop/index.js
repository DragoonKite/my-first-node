// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        message: 'Please enter instructions for using your project and/or examples of usage (Optional)'
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
        data => {writeToFile('./utils/README.md', data)})
    .then(successfulResponse => {
        // this will run when we use `resolve()` - for testing
        console.log(successfulResponse);
        })
    .catch(errorResponse => {
        // this will run when we use `reject()` - for testing
        console.log(errorResponse);
        });