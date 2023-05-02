// shapes

const { Circle, Triangle, Square } = require('./shapes');


  describe('Circle', ()=> {
    it('should be same', () =>{
      const circle = new Circle ('NNN','pink','black');
      expect(circle.render()).toEqual(
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="100" stroke-width="3" fill="black"/><text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="pink">NNN</text></svg>`
      )
    });
  });


  // describe('Circle', ()=> {
  //   it('expected version', () =>{
  //     const circle = new Circle ('NNN','pink','black');

  //     const expectedSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  //     <circle cx="150" cy="100" r="100" stroke-width="3" fill="black"/>
  //     <text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="pink">NNN</text></svg>`
  //     expect(circle.render()).toEqual(expectedSVG);
  //   }
  //   )
  // });




  // describe('Circle', () => {

  //   describe('Circle Render', () => {
  //       it('should render the SVG for a circle', () => {
  //           const circle = new Circle();
  //     expect(circle.render(text, textColor, shapeColor)).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  //   <circle cx="150" cy="100" r="100" stroke-width="3" fill="black"/>
  //   <text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="pink">NNN</text></svg>`)
  // });


  //       });
  //   });



// test('Circle should generate SVG shape correctly', () => {
//   const circle = new Circle('Test', '#FFFFFF', '#000000');
//   const expectedSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="100" stroke-width="3" fill="#000000"/><text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="#FFFFFF">Test</text></svg>';
//   expect(circle.render()).toEqual(expectedSVG);
// });

// test('Triangle should generate SVG shape correctly', () => {
//   const triangle = new Triangle('Test', '#FFFFFF', '#000000');
//   const expectedSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="600" height="200"><polygon points="300,0 600,520 0,520" fill="#000000"/><text x="50%" y="70%" text-anchor="middle" font-size="2em" fill="#FFFFFF">Test</text></svg>';
//   expect(triangle.render()).toEqual(expectedSVG);
// });

// test('Square should generate SVG shape correctly', () => {
//   const square = new Square('Test', '#FFFFFF', '#000000');
//   const expectedSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="200" height="200" fill="#000000"/><text x="35%" y="60%" text-anchor="middle" font-size="6em" fill="#FFFFFF">Test</text></svg>';
//   expect(square.render()).toEqual(expectedSVG);
// });
