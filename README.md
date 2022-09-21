# Professional README Generator

## Description
When creating an open source project on GitHub, it’s important to have a high-quality README for the app that can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

The task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. This package follows the guidelines provided by the Professional README Guide and contains everything that a high-quality, professional README should contain.

## Table of Contents
* [Tools](#tools)
* [Links](#links)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Instructions](#Instructions)
* [Tests](#Tests)
* [Deliverables](#Deliverables)
* [Walkthrough Video](#Walkthrough-Video)
* [Technical Acceptance Criteria](#Technical-Acceptance-Criteria)
* [Repository Quality](#Repository-Quality)
* [Submission](#Submission)

### Tools
- Node.js
- File system module (fs)
- Inquirer module
- JavaScript

### Links
* Professional README Guide: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
* Fullstack Blog Video Submission Guide: https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

### User Story
* AS A developer
* I WANT a README generator
* SO THAT I can quickly create a professional README for a new project

### Acceptance Criteria:
* GIVEN a command-line application that accepts user input
* WHEN I am prompted for information about my application repository
* THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
* WHEN I enter my project title
* THEN this is displayed as the title of the README
* WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions 
* THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests 
* WHEN I choose a license for my application from a list of options
* THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
* WHEN I enter my GitHub username
* THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
* WHEN I enter my email address
* THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
* WHEN I click on the links in the Table of Contents
* THEN I am taken to the corresponding section of the README

### Instructions
1. Clone the main project then open up the project folder in your text editor.
2. Run 'npm install' in terminal to install node_modules with all dependencies.
3. Make sure you are in the main project folder using the 'cd' command.
4. Then type in 'node index.js' or 'node index' to execute the application and load up the chain of prompts (questions).
5. Answer all the prompts and once completed, your personal README.md file will be created.

### Tests
* The command line to run a test on this application is: node index.js

### Deliverables: 
* A sample README generated using the application must be submitted. 
* Your GitHub repository containing your application code.

### Walkthrough Video: 
* A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
* The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

### Technical Acceptance Criteria
* Satisfies all of the above acceptance criteria plus the following:
- Uses the Inquirer package (https://www.npmjs.com/package/inquirer).

### Repository Quality
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README with description and a link to walkthrough video.

### Submission
* Date Submitted: September 28, 2022
* Walk Through Video demonstrating the functionality of application: https://drive.google.com/file/d/1mRhxAGBrY1EJvSb9mhCyJZrhyBE2mM3i/view
* Sample README.md file for project repository generated using application: 
* The URL of the GitHub repository that contains your code: https://github.com/bslockhart/Brians-README-Generator