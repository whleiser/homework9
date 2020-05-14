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
            message: "List a table of contents"
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation information for yur project."
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage information for your project."
        },
        {
            type: "input",
            name: "license",
            message: "Enter license information for your project.?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter contributing information for your project."
        },
        {
            type: "input",
            name: "tests",
            message: "Enter tests information for your project."
        },
        {
            type: "input",
            name: "questions",
            message: "Enter question information for your project."
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