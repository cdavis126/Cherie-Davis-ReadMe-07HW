// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What tools or packages did you install to complete this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and/or examples for using this project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Were there any collaborators on this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Did you run any tests for your project or application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// Prompt the user with inquirer
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateMarkdown(answers); // Generate the README content with the badge

  // Create a filename based on the project title
  const fileName = answers.title.toLowerCase().replace(/ /g, '-') + '.md';

  writeToFile(fileName, readmeContent); // Write the content to a file
});

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log(`${fileName} has been generated successfully!`);
        }
    });
}