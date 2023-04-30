// Dependencies that are required to run the app.
const inquirer = require("inquirer");
const fs = require("fs");




// An array of questions for inquirer to prompt.
const questions = [
    {
        type: 'input', 
        name: 'text', 
        message: 'Enter the text of the logo:'
    },
    {
        type: 'input', 
        name: 'textColor', 
        message: 'What color do you want your text?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['circle', 'triangle', 'square'],
      },
    {
        type: 'input', 
        name: 'shapeColor', 
        message: 'What color should the shape be?:'
    }
];



//Function writes a readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if(err)
        {
        console.error("something happened when generating the file.", err)
        }
        else {
            console.log("Written!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
inquirer.prompt(questions)

.then(answers =>{
    //I want to keep this here so that I remember this is another way to do it.
    // const title = answers.title;
    // const author = answers.author;
    const text = answers.text;
    const textColor = answers.textColor;
    const shapeColor = answers.shapeColor;
    
    let output = 
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect width="160" height="160" x="70" y="20" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>

`;


    
    writeToFile("logo.svg", output);
    
})

