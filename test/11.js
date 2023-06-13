const fs = require('fs');

const fileName = 'mynewfile2.txt';

fs.open(fileName, 'w', (err, file) => {
  if (err) {
    console.log('Error creating file');
  } else {
    console.log(`File "${fileName}" created successfully`);
  }
});
