// Function to return a license badge based on the selected license
export function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
}

// Function to return a license link
export function renderLicenseLink(license) {
  if (license === 'None') return '';
  switch (license) {
      case 'MIT':
          return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL v3':
          return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 3-Clause':
          return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return '';
  }
}

// Function to return the license section of the README
export function renderLicenseSection(license) {
  if (license === 'None') {
      return '## License\nThis project is not licensed.';
  }
  return `## License\nThis application is covered under the ${renderLicenseLink(license)}.`;
}

// Function to generate markdown content for the README
export function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license); // Generates the badge
  const licenseSection = renderLicenseSection(data.license); // Generates the license section

  return `
${licenseBadge} <!-- License badge is placed here -->

# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

${licenseSection}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}
