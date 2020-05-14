const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

var generateMarkdown = require('./utils/generateMarkdown.js');

function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "userName",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a brief description of your project."
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "installation",
            message: "Where are you from?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is your favorite hobby?"
        },
        {
            type: "input",
            name: "license",
            message: "What is your favorite food?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter your GitHub Username"
        },
        {
            type: "input",
            name: "tests",
            message: "Enter your LinkedIn URL."
        },
        {
            type: "input",
            name: "questions",
            message: "Enter your LinkedIn URL."
        }

    ])
}

const writeToFile = util.promisify(fs.writeFile);

async function init() {

    try {
        const answers = await promptUser();

        const readMe = generateMarkdown(answers);

        await writeToFile("README.md", readMe);

        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }

}

init();