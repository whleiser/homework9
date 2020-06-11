function generateMarkdown(data) {
    return `
# Title: 
${data.title}
## Description: 
${data.description}
## Table of contents:
${data.tableOfContents}
### Installation:
${data.installation}
### Usage:
${data.usage}
###:
${data.license}
###:
${data.contributing}
###:
${data.tests}
###:
${data.questions}

`;
}

module.exports = generateMarkdown;