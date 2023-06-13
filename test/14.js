const fs = require('fs');

const fileName = 'mynewfile2.txt';

fs.unlink(fileName, (err) => {
  if (err) {
    console.log('Error deleting file');
  } else {
    console.log(`File "${fileName}" deleted successfully`);
  }
});
