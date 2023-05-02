// This document includes the classes for the 3 shape options for the logos. I wanted to have a separate document for each
// and then a document for shapes general, but I struggled so hard with this that I just left it as is. 
// The cosntructor adds the text, textColor and shapeColor to the individual shapes and can be easily edited per shape if needed.

// Circle class
class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {


        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="100" stroke-width="3" fill="${this.shapeColor}"/><text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

// Triangle class

class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="600" height="200"><polygon points="300,0 600,520 0,520" fill="${this.shapeColor}"/><text x="50%" y="70%" text-anchor="middle" font-size="2em" fill="${this.textColor}">${this.text}</text></svg>`
    
}}


//Square class

class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="200" height="200" fill="${this.shapeColor}"/><text x="35%" y="60%" text-anchor="middle" font-size="6em" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Circle, Triangle, Square }