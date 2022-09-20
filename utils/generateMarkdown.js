module.exports = (detailedData, briefData) => {
  const { installation, usage, contribution, test, licenses } = detailedData;
  const { title, description, github, email } = briefData;

  return `# ${title}
${licenses
      .map((item) => {
        if (item == 'MIT') {
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
        }
        if (item == 'Mozilla') {
          return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n`;
        }
        if (item == 'Perl') {
          return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)\n`;
        }
        if (item == 'SIL') {
          return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)\n`;
        }
        if (item == 'IBM') {
          return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)\n`;
        }
      })
      .join('')
    }

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [${
    // Update link label according to how many licenses were chosen
    licenses.length > 1 ? 'Licenses' : 'License'
    }](${licenses.length > 1 ? '#Licenses' : '#License'})
- [Questions](#Questions)

##

## Description
${description} 

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${test}

## ${
    // Update the labels accordingly
    licenses.length > 1 ? 'Licenses' : 'License'
    }

This Applications is covered under the following ${licenses.length > 1 ? 'licenses:' : 'license:'
    }

${licenses.length > 1
      ? licenses
        .map((item) => {
          if (licenses.indexOf(item) == licenses.length - 1) {
            return `* ${item}`;
          } else {
            return `* ${item}\n`;
          }
        })
        .join('')
      : licenses
    }

## Questions
https://github.com/${github} 

How to reach me for additional questions: ${email}
`;
};