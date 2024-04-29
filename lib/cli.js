const inquirer = require("inquirer"); // This imports the inquirer module for creating interactive command-line interfaces.
const { writeFile } = require("fs/promises"); // This is a writefile function that allows for writing files asynchronously using promises.
const { Circle, Triangle, Square } = require("./shapes"); // This imports these classes from a file name shape.js.
const questions = require("./questions"); // This imports a module containing the questions from the "questions.js" file.
const { LogoText, SVG } = require("./Svg"); // This imports the LogoText and SVG from the "Svg.js" file to be able to use.

class CLI {
  constructor() {}
  run() {
    return inquirer
      .prompt(questions)
      .then((responses) => {

        const svg = this.generateSVG(responses);

        const markup = svg.render();
        
        return writeFile("logo.svg", markup);
      })
      .then(() => console.log("Logo successfully created!"))
      .catch((err) => {
        console.log(err);
        console.log("Something went wrong.");
      });
  }

  generateSVG(options) {
    const logoText = new LogoText(options.logotext, options.textcolour);
    switch (options.shape) {
      case "circle":
        const circle = new Circle(options.colour, logoText);
        return new SVG(circle, logoText);
      case "square":
        const square = new Square(options.colour, logoText);
        return new SVG(square, logoText);
      case "triangle":
        const triangle = new Triangle(options.colour, logoText);
        return new SVG(triangle, logoText);
    }
  }
}

module.exports = CLI;