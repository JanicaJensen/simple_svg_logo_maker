
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');




const questions = [
    {
        type: 'input',
        message: 'Input up to 3 characters for the logo:',
        name: 'text',
    },

    {
        type: 'input',
        message: 'Choose a color for the text:',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Choose a shape for the logo:',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },

    {
        type: 'input',
        message: 'Choose a color for the shape:',
        name: 'shapeColor',
       
    }
];


function generateLogo(text, textColor, shape, shapeColor) {
    switch (shape) {
        case 'Circle':
            const circle = new Circle(text, textColor, shapeColor);
            return circle.render();
        case 'Triangle':
            const triangle = new Triangle(text, textColor, shapeColor);
            return triangle.render();
        case 'Square':
            const square = new Square(text, textColor, shapeColor);
            return square.render();
    }
}


function writeTofile(fileName, data) {
    fs.writeFile(fileName, data,
        (err) => err ? console.log(err) : console.log("Logo was generated!"))
}


function init() {
    inquirer
        .prompt(questions)
        .then((input) => {
            text = input.text
            textColor = input.textColor
            shape = input.shape
            shapeColor = input.shapeColor
            writeTofile('logo.svg', generateLogo(text, textColor, shape, shapeColor));

        }
        )
        .catch((error) => {
            console.log(error)
        })
}



init();















//THIS IS WHERE NEWER STARTED

// // Dependencies that are required to run the app.
// const inquirer = require("inquirer");
// const fs = require("fs");
// const {Circle, Triangle, Square} = require('./lib/shapes.js');





// // An array of questions for inquirer to prompt.
// const questions = [
//     {
//         type: 'input', 
//         name: 'text', 
//         message: 'Enter the text of the logo:', 
//         validate: (response) => {
//             if(response.length > 0 && response.length <4){
//                 return true;
//             } else return 'Must be between 1 and 3 characters!';
//         }
//     },
//     {
//         type: 'input', 
//         name: 'textColor', 
//         message: 'What color do you want your text?',
//     },
//     {
//         type: 'list',
//         name: 'shape',
//         message: 'Choose a shape',
//         choices: ['circle', 'triangle', 'square'],
//       },
//     {
//         type: 'input', 
//         name: 'shapeColor', 
//         message: 'What color should the shape be?:',
//     }
// ];


// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if(err)
//         {
//         console.error("something happened when generating the file.", err)
//         }
//         else {
//             console.log("Written!");
//         }
//     })
// }

// function generateLogo(text, textColor, shape, shapeColor) {
//     switch (shape) {
//         case 'Circle':
//             const circle = new Circle(text, textColor, shapeColor);
//             return circle.render();
//         case 'Triangle':
//             const triangle = new Triangle(text, textColor, shapeColor);
//             return triangle.render();
//         case 'Square':
//             const square = new Square(text, textColor, shapeColor);
//             return square.render();
//     }
// }





// // Function that utilizes the user prompts to then intialize the logo
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((input) => {
//             text = input.text,
//             textColor = input.textColor,
//             shape = input.shape,
//             shapeColor = input.shapeColor,
//             writeToFile('logo.svg', generateLogo(text, textColor, shape, shapeColor));

//         }
//         )
//         .catch((error) => {
//             console.log(error)
//         })
    
// }



// init();






// THIS IS WHERE OLD STARTED

//Function writes a readme file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName,data, (err) => {
//         if(err)
//         {
//         console.error("something happened when generating the file.", err)
//         }
//         else {
//             console.log("Written!");
//         }
//     })
// }

// // TODO: Create a function to initialize app
// function init() {
    
// }

// // Function call to initialize app
// init();
// inquirer.prompt(questions)

// .then(answers =>{
//     //I want to keep this here so that I remember this is another way to do it.
//     // const title = answers.title;
//     // const author = answers.author;
//     const text = answers.text;
//     const textColor = answers.textColor;
//     const shapeColor = answers.shapeColor;
    
//     let output = 
// `
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <rect width="160" height="160" x="70" y="20" fill="${shapeColor}" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

// </svg>

// `;


    
//     writeToFile("logo.svg", output);
    
// })


