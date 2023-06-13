const fs = require('fs');

const fileName = 'mynewfile1.txt';
const content = ' This is my text.\n';

fs.appendFile(fileName, content, (err) => {
  if (err) {
    console.log('Error appending to file');
  } else {
    console.log(`Text appended to file "${fileName}" successfully`);
  }
});
