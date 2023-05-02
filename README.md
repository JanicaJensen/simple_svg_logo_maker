# simple_svg_logo_maker
A simple SVG logo maker, done as an assignment for class. 

## Description

This is an app that runs in the terminal using Node.js, it will ask the user for text, a shape, and a color for both the shape and the text. Once done, a .svg file will be generated with a logo containing the letters entered and utilizing the colors chosen. This is a very simple logo. 

## Table of Contents

1. [Team](#team)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tests](#tests)
5. [Bugs](#bugs)
6. [Questions](#questions)
7. [Contribution Guidelines](#contribution-guidelines)
8. [License](#license)

## Team

---

The app was created by Janica Jensen.

_Other tools utilized:_

Node.js: https://nodejs.org/en

npm Inquirer.js: https://www.npmjs.com/package/inquirer

Jestjs: https://jestjs.io/

## Installation

---

To run this program, one should have Node.js version 16 installed as well as node package manager (npm) Inquirer, as the app does consider it "required". If one wishes to run the tests, they may also need Jestjs. In order to run all of the aforementioned, each respective file must be opened in integrated terminal and "npm i" run in order to install all dependencies. One should assure themselves that they are in the directory that requires a README, open an integrated terminal, invoke Node, and run the program with "node index.js".

## Usage

---

Once one has followed the installation guidelines above, they will be able to run the program in the integrated terminal using "node index.js". It will present the user with a question that should be answered with 3 characters for the text, a color or hexadecimal color for the colors and then choose a shape from the list. It will continue to present the user with questions which they must then answer, hit return, and answer the next until it runs out. There is one multiple choice question which requires the use of an arrow key to select. Once all questions have been answered, the last "return" will show the file as "Generated logo.svg" and the user will be able to see the logo.svg listed in the folder to the left where they populated it.

video that demonstrates full usage:https://drive.google.com/file/d/1jH6wG1_oOF7sZihX3u4118HUpWXRVG1a/view?usp=sharing

## Tests

---

This app can run a test that checks whether the shapes render correctly. It's pretty simple, but it will check to see if they generate the correct shapes, in black, with pink letters 'NNN' on them.To utilize the tests and run them, install Jest on the shapes.test.js and run it in integrated terminal with "jest shapes.test.js".


## Bugs

---

There are no known bugs, actually. For once my thing just works!😀 

## Questions

---

Please refer any questions to: janicajackson@gmail.com

**GitHub profile:** https://github.com/janicajensen

## Contribution Guidelines

---

If anyone wishes to contribute to this project, they may find the GitHub repository at https://github.com/JanicaJensen/simple_svg_logo_maker and they are welcome to create a fork.

## License

---

This project is covered under the MIT license.
More info can be found by clicking the badge above the description.
