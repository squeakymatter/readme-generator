// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  if (data.license === 'GNU GPL v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (data.license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.license === 'MPL 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'GNU GPL v3.0') {
    return `[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (data.license === 'Apache 2.0') {
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else if (data.license === 'MPL 2.0') {
    return `[MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ''
  }
}

function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data)}

  ## Description
  ${data.description} 
  
  ---
  
  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ---

  ## Installation
  ${data.installation}

  ---
  
  ## Usage 
  ${data.usage}  

  ---
  
  ## License
  This repo is licensed under ${renderLicenseLink(data)}.

  ---

  ## Contributing
  ${data.contributing}

  ---

  ## Tests
  ${data.test}

  ---

  ## Questions
  If you have any questions, please contact:
  * [GitHub](https:/github.com/${data.username})
  * [${data.email}](mailto:${data.email})
`
}

module.exports = generateMarkdown
