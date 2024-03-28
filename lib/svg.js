class LogoText{
    constructor(text, colour) {
        this.colour;
        this.text;
    }
    render() {
        return `<text x="150" v="125" font-size:"60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
    }
}

class SVG{
    constructor(shape, logoText) {
        this.shape;
        this.logoText;
    }
    render() {
        const svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape} ${text}</svg>'; 
        return svg;
    }
}

module.exports = { LogoText, SVG };