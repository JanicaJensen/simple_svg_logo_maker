// Jest.js tests to test whether the shapes will render correctly. 

// this const brings in the different shape classes from the corresponding document.
const { Circle, Triangle, Square } = require('./shapes');

// This test is testing whether a circle generated with my functions will come out like the expected one included after toEqual.
  describe('Circle', ()=> {
    it('should render a black circle with pink letters', () =>{
      const circle = new Circle ('NNN','pink','black');
      expect(circle.render()).toEqual(
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="100" stroke-width="3" fill="black"/><text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="pink">NNN</text></svg>`
      )
    });
  });

// This test is testing whether a square generated with my functions will come out like the expected one included after toEqual.
  describe('Square', ()=> {
    it('should render a black square with pink letters', () =>{
      const square = new Square ('NNN','pink','black');
      expect(square.render()).toEqual(
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="200" height="200" fill="black"/><text x="35%" y="60%" text-anchor="middle" font-size="6em" fill="pink">NNN</text></svg>`
      )
    });
  });

// This test is testing whether a triange generated with my functions will come out like the expected one included after toEqual.
  describe('Triangle', ()=> {
    it('should render a black triangle with pink letters', () =>{
      const triangle = new Triangle ('NNN','pink','black');
      expect(triangle.render()).toEqual(
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="600" height="200"><polygon points="300,0 600,520 0,520" fill="black"/><text x="50%" y="70%" text-anchor="middle" font-size="2em" fill="pink">NNN</text></svg>`
      )
    });
  });


  //because I will forget, this utilizes Jest, so install it and then run jest shapes.test.js and see if the tests pass!