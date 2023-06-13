const fs = require('fs');

const fileName = 'mynewfile3.txt';
const content = 'Hello content!\n';

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.log('Error writing to file');
  } else {
    console.log(`Content replaced in file "${fileName}" successfully`);
  }
});
