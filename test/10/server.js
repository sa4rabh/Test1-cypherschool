const fs = require('fs');

const content = 'Hello content!\n';

fs.appendFile('mynewfile1.txt', content, (err) => {
  if (err) {
    console.log('Error appending to file');
  } else {
    console.log('Text appended to file successfully');
  }
});
