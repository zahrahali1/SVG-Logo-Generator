// This logoText class stores text and colour information and the render method generates the SVG text with the specified text and colour
class LogoText {
    constructor(text, colour) {
        this.text = text; 
        this.colour = colour; 
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`; 
}
}

// This SVG class takes the shape and logoText as arguments and stores them. The render method generates the SVG shape with the specified shape and logoText.
class SVG {
    constructor(shape, logoText) {
        this.shape = shape;
        this.logoText = logoText; 
    }
    render() {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()} ${this.logoText.render()}</svg>`;
        return svg;
    }
}

// It exports the logoText and SVG classes so it can be reused 
module.exports = { LogoText, SVG };