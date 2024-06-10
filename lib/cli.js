const inquirer = require("inquirer"); // This imports the inquirer module for creating interactive command-line interfaces.
const { writeFile } = require("fs/promises"); // This is a writefile function that allows for writing files asynchronously using promises.
const { Circle, Triangle, Square } = require("./shapes"); // This imports these classes from a file name shape.js.
const questions = require("./questions"); // This imports a module containing the questions from the "questions.js" file.
const { LogoText, SVG } = require("./Svg"); // This imports the LogoText and SVG from the "Svg.js" file to be able to use.

class CLI {  
  constructor() {}
  run() { // This run method prompts the user with questions and returns a promise that resolves with the users repsonses.
    return inquirer
      .prompt(questions)
      .then((responses) => {
 
        const svg = this.generateSVG(responses); // The constant variable svg passes the users response as an argument 

        const markup = svg.render(); // This render method generates the svg markup and follows a promise that resolves when the file has been successfully written.
        
        return writeFile("logo.svg", markup);
      })
      .then(() => console.log("Logo successfully created!")) // then if successful it will log "Logo successfuly created" to the console.
      .catch((err) => {
        console.log(err); // And if any errors occur it will catch those errors and print out "Something went wrong"
        console.log("Something went wrong.");
      });
  }



  generateSVG(options) {  // This funtion creates instances of different shapes: circle, square and triangle based on the shapes 
    const logoText = new LogoText(options.logotext, options.textcolour); // This initializes the text with colour
    switch (options.shape) { // This switch statement determines which shapes to create either circle, square and triangle 
      case "circle":
        const circle = new Circle(options.colour, logoText);
        return new SVG(circle, logoText);
      case "square":
        const square = new Square(options.colour, logoText);
        return new SVG(square, logoText);
      case "triangle":
        const triangle = new Triangle(options.colour, logoText);
        return new SVG(triangle, logoText); // It returns with a new SVG instance with the shape and text
    }
  }
}


module.exports = CLI;