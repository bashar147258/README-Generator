// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU Public License v3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
    case "BSD":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "Mozilla Public License 2.0":
      return `![License](https://img.shields.io/badge/license-Mozilla%202.0-yellow.svg)`;
    case "Apache License 2.0":
      return `![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)`;
    case "MIT":
      return `![License](https://img.shields.io/badge/license-MIT-red.svg)`;
    case "none":
      break;
    default: '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU Public License v3.0'":
      return `![GNU Public License v3.0](https://opensource.org/licenses/GPL-3.0)`;
    case "BSD":
      return `![BSD](https://opensource.org/licenses/BSD-3-Clause)`;
    case "Mozilla Public License 2.0":
      return `![Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
    case "Apache License 2.0":
      return `![Apache License 2.0](https://opensource.org/licenses/Apache-2.0`;
    case "MIT":
      return `![MIT License](https://opensource.org/licenses/MIT)`;
    case "none":
      break;
    default: '';
      break;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Contents
  1.[Github](#Github)
  2.[Email](#Email)
  3.[Title](#Title)
  4.[Description](#Description)
  5.[Usage](#Usage)
  6.[Installation](#Installation)
  7.[License](#License)
  8.[Test](#Test)
  9.[Contributions](#Contributions)

  ### Description
  ${data.description}

  ### Usage
  ${data.usage}

  ### Installation
  ${data.installation}

  ### License
  Licensed under the ${renderLicenseLink(data.license)}

  ### Test
  ${data.test}

  ### Contribution
  ${data.contribution}

  ### Contact me
  Email:${data.email}
  Github:${data.github}
  `;
}

module.exports = generateMarkdown;
