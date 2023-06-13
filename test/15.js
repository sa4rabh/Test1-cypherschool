const fs = require('fs');

const oldFileName = 'mynewfile1.txt';
const newFileName = 'myrenamedfile.txt';

fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    console.log('Error renaming file');
  } else {
    console.log(`File renamed successfully: "${oldFileName}" -> "${newFileName}"`);
  }
});
