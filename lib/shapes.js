class Shape {
  constructor(colour = "#000000", text = "") { // This constructor initializes the shape object with the provided values for color and text.
    this.colour = colour;
    this.text = text;
  }
  setColour(colour) { // These methods updates the colour and text properties of the shape object 
    this.colour = colour;
  }
  setText(text) {
    this.text = text;
  }
}
 
// These classes define different shapes and have a render method to generate SVG code for each shape with the specified properties.

class Square extends Shape {  
  constructor(colour, text) {
    super(colour, text);
  }
  render() { 
    const svg = `<rect x="90" y="40" width="120" height="120" fill="${this.colour}" />`;
    return svg;
  }
}

class Circle extends Shape {
  constructor(colour, text) {
    super(colour, text);
  }
  render() { 
    const svg = `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
    return svg;
  }
}

class Triangle extends Shape {
  constructor(colour, text) {
    super(colour, text);
  }
  render() {
    const svg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
    return svg;
  }
}


module.exports = { Circle, Triangle, Square };
