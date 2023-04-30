const Shape = require('./Shape')
//triangle is a shape ! telling what parent is
class Circle extends Shape {
    render(){
return 
`<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }}

module.exports = Cirle;