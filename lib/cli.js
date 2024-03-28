const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('./shapes');
const questions = require('./questions')
const { LogoText, SVG } = require('./svg');

class CLI {
  constructor() {
  
  }
  run() {

    return inquirer
      .prompt(questions)
      .then((responses) => {

        const svg = this.generateSVG(responses);

        const markup = svg.render();

        return writeFile("logo.svg", markup);
      })
      .then(() => console.log('Logo successfully created!'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  generateSVG(options) {
    const logoText = new LogoText(options.text, options.textColour);

    switch (options.shape) {
      case "circle":
        const circle = new Circle(options.shapeColour);
        return new SVG(circle, logoText);
      case "square":
        const square = new Square(options.shapeColour);
        return new SVG(square, logoText);
      case "triangle":
        const triangle = new Sriangle(options.shapeColour);
        return new SVG(triangle, logoText);
    }
  }
}

module.exports = CLI;
