// packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user input
const questions = [
  {
    //username
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (required)',
    validate: (usernameInput) => {
      if (usernameInput) {
        return true
      } else {
        console.log('Please enter your GitHub username.')
      }
    },
  },
  {
    //email address
    type: 'input',
    name: 'email',
    message: 'What is your email address? (required)',
    validate: (emailInput) => {
      if (emailInput) {
        return true
      } else {
        console.log('Please enter your email address.')
      }
    },
  },
  {
    //project title
    type: 'input',
    name: 'title',
    message: "What is your project's title? (required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true
      } else {
        console.log(`Please enter your project's title.`)
      }
    },
  },
  {
    //description
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project. (required)',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true
      } else {
        console.log(`Please enter your project's description.`)
      }
    },
  },
  {
    //installation instructions
    type: 'input',
    name: 'installation',
    message:
      'Provide a step-by-step description of how to get the development environment running. (required)',
    validate: (installationInput) => {
      if (installationInput) {
        return true
      } else {
        console.log('Enter installation instructions.')
      }
    },
  },
  {
    //usage
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions for your project. (required)',
    validate: (usageInput) => {
      if (usageInput) {
        return true
      } else {
        console.log('Enter usage instructions.')
      }
    },
  },
  {
    //contributing guidelines
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing guidelines.',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true
      } else {
        console.log('Enter contributing guidelines.')
      }
    },
  },
  {
    //test instructions
    type: 'input',
    name: 'test',
    message: 'Enter tests for your project. (optional)',
  },
  {
    //license
    type: 'list',
    name: 'license',
    message: 'What license would you like to use?',
    choices: ['GNU GPL v3.0', 'Apache 2.0', 'MIT', 'MPL 2.0', ''],
  },
]
//prompt user for responses
inquirer.prompt(questions).then((data) => {
  fs.writeFile('./dist/README.md', generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(
      'README.md has been successfully created in the `dist` directory.'
    )
  })
})
