const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
    // The test checks if a green circle is rendered correctly
    test("should render svg for a green circle element", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle();
        circle.setColour("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });   
    // The test checks if a circle can accept and rencer the colour blue.
    test("should accept a fillColour param", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
        const circle = new Circle();
        circle.setColour("blue"); 
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () => {
    // The test checks if a triangle with the colour bisque is rendered correctly
    test("should render svg for a red polygon element", () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
        const triangle = new Triangle();
        triangle.setColour("bisque");
        const actualSvg = triangle.render();
        console.log(actualSvg);
        expect(actualSvg).toEqual(expectedSvg);
    });
    // The test checks if the triangle can accept and rencer the colour purple
    test("should accept a fillColour param", () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
        const triangle = new Triangle();
        triangle.setColour("purple");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Square", () => {
    // The test checks if a blue square is rendered correctly
    test("should render svg for a blue rect element", () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="blue" />';
        const square = new Square();
        square.setColour("blue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColour param", () => {
        // The test checks if a square can accept and rencer the colour red
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="red" />';
        const square = new Square();
        square.setColour("red");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});