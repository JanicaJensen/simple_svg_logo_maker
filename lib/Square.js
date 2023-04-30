const Shape = require('./Shape.js');

class Square extends Shape {
  render() {
    return `<rect width="160" height="160" x="70" y="20" fill="${this.color}" />`;
  }
}
module.exports = Square;