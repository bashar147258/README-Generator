
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
    case "MIT License":
      return `![License](https://img.shields.io/badge/license-MIT-red.svg)`;
    case "None":
      break;
    default: '';
      break;
  }
}


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
    case "MIT License":
      return `![MIT License](https://opensource.org/licenses/MIT)`;
    case "None":
      break;
    default: '';
      break;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Contents
  1. [Description](#Description)
  2. [Usage](#Usage)
  3. [Installation](#Installation)
  4. [Licenses](#Licenses)
  5. [Test](#Test)
  6. [Contributions](#Contributions)

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
