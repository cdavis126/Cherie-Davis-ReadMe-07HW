// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';


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
/////table of contents section? Do I need to create a function that maps out the rest of the data?
{
    section: "Repository",
    questions: [
        "What is the link to your GitHub Repository?"
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
    section: "Contributing",
    questions: [
      "Were there any collaborators on this project?"
    ]
  },
{
    section: "License",
    questions: [
        "What license did you use to complete this project?"
    ]
},
/////insert badges????
{
    section: "Tests",
    questions: [
      "Did you run any tests for your project or application?"
    ]
  },
{
    section: "Questions",
    questions: [
        "What features are included in this project?"
    ]
}
];

///need to be able to nest the arrat for easy user output
const allQuestions = questions.flatMap(section => {
    return section.questions.map(question => ({
      type: 'input',
      name: question,
      message: question
    }));
  });
  
/// Prompt to use inquirer
inquirer.prompt(allQuestions).then((answers) => {
    const readmeContent = generateREADME(answers);

    // Create a filename based on the project title
    const title = answers['What is your project title'];
    const fileName = title.toLowerCase().replace(/ /g, '-') + '.md'; // Create a filename from the title

    writeToFile(fileName, readmeContent);
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
          if (err) {
            console.error("Error writing to file", err);
          } else {
            console.log(`${fileName} has been generated successfully!`);
          }
        });
      }

      function generateREADME(answers) {
        return `
      # ${answers['What is your project title']} 
      
      ## Description
      - **Motivation**: ${answers['What was your motivation for creating the project?']}
      - **Why build this project**: ${answers['Why did you build this project?']}
      - **Problem solved**: ${answers['What problem does this project solve?']}
      - **What I learned**: ${answers['What did you learn when creating this project?']}
      
      ## Installation
      - ${answers['What tools or packages did you install to complete this project?']}
      
      ## Usage
      - ${answers['Please provide instructions and / or examples for how to best use this project?']}
      
      ## Contributing
      - Collaborators: ${answers['Were there any collaborators on this project?']}
      
      ## License
      - License used: ${answers['What license did you use to complete this project?']}
      
      ## Tests
      - ${answers['Did you run any tests for your project or application?']}
      
      ## Questions
      - Features: ${answers['What features are included in this project?']}
        `;
      }


      
// TODO: Create a function to initialize app
function initApp() {
    console.log("Initializing the app!");
  }
  
  //Function call to actually run the app
  initApp()

