// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = `https://img.shields.io/badge/license-${license}-orange?style=plastic=appveyor?raw=true`
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = `https://opensource.org/licenses/${licenseSearch}`
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
 
  ## Installation
  
  ${data.install}
  
  ## Usage
 
  ${data.usage}
 
 
   ## Tests
  ${data.test}
  

  ## Contributors
  ${data.contributors}
  
  ## Questions
  If you have any questions feel free to reach out to me at:
  <br>
  [${data.userEmail}](mailto:${data.userEmail})
  <br>
  [GitHub](https://github.com/${data.githubName})


`;
}

module.exports = generateMarkdown;


