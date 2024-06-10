const questions = [ // These are an array of questions for the user
  {
    type: 'input',
    name: 'logotext',
    message: 'Enter up to three characters for your logo',
  },
  {
    type: 'input',
    name: 'colour',
    message: 'Enter the shape colour you want'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'textcolour',
    message: 'Enter the text colour you want'
  }
];

module.exports = questions;