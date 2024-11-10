// TODO: Include packages needed for this application
import inquirer from 'inquirer';
const inquirer = require('inquirer');
const questions = require('./questions');

///need to be able to nest the arrat for easy user input
const allQuestions = questions.flatMap(section => {
    return section.questions.map(question => ({
      type: 'input',
      name: question,
      message: question
    }));
  });

  inquirer.prompt(allQuestions)
  .then(answers => {
    console.log("Your responses:", answers);
  })
  .catch(err => console.error(err));

// TODO: Create an array of questions for user input
const questions = [
{
    section: "Title",
    questions: [ 
        "What is your project title"
    ]
},
{
    section: "Description",
    questions: [
        "Please provide a short description of your project.",
        "What was your motivation for creating the project?",
        "Why did you build this project?",
        "What problem does this project solve?",
        "What did you learn when creating this project?",
    ]
},
{
    section: "Installation",
    questions: [
        "What tools or packages did you install to complete this project?"
    ]
},
{
    section: "Usage",
    questions: [
        "Please provide instructions and / or examples for how to best use this project?"
    ]
},
{
    section: "License",
    questions: [
        "What license did you use to complete this project?"
    ]
},
{
    section: "Features",
    questions: [
        "What features are included in this project?"
    ]
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
