const fs = require('fs');
const generateReadMe = require('./utils/generateReadMe');
const inquirer = require('inquirer');

const promptBrief = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            },
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            },
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github username (Required)',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You need to enter a github username!');
                    return false;
                }
            },
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address (Required)',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter a email address!');
                    return false;
                }
            },
        },
    ]);
};

const promptDetailed = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions (Required)',
            validate: (installationInput) => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to enter installation instructions!');
                    return false;
                }
            },
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information (Required)',
            validate: (usageInput) => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to enter usage information!');
                    return false;
                }
            },
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines (Required)',
            validate: (contributeInput) => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('You need to enter contribution guidelines!');
                    return false;
                }
            },
        },

        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions (Required)',
            validate: (testInput) => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You need to enter test instructions!');
                    return false;
                }
            },
        },

        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Choose the license(s) for this application: (Min 1 required)',
            choices: ['MIT', 'Mozilla', 'Perl', 'SIL', 'IBM'],
            validate: (choicePicked) => {
                if (choicePicked.length > 0) {
                    return true;
                } else {
                    choicePicked[0] = 'No license';
                    return true;
                }
            },
        },
    ]);
};

promptBrief().then((briefData) => {
    promptDetailed().then((detailedData) => {
        // Then we pass the data into the function that generates the content
        readMeContent = generateReadMe(detailedData, briefData);
        // Afterwards, generate the README file using the above generated content
        fs.writeFile('./utils/README.md', readMeContent, (err) => {
            if (err) throw new Error(err);
            // Then alert the user the file has been successfully generated
            console.log(
                'Your README has been created! Check out README.md in this directory to see it!'
            );
        });
    });
});

