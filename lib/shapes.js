// individual functions for each shape
class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // setColor(color) {
    //     this.shapeColor = color;
    // }

    render() {


        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="100" stroke-width="3" fill="${this.shapeColor}"/>
        <text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // setColor(color) {
    //     this.shapeColor = color;
    // }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="600" height="200">
        <polygon points="300,0 600,520 0,520" fill="${this.shapeColor}"/>
        <text x="50%" y="70%" text-anchor="middle" font-size="2em" fill="${this.textColor}">${this.text}</text></svg>`
    
}}

class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // setColor(color) {
    //     this.shapeColor = color;
    // }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="35%" y="60%" text-anchor="middle" font-size="6em" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Circle, Triangle, Square }