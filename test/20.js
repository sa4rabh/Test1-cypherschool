const fs = require('fs');

function checkFileExists(filePath) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    reject(new Error('File does not exist'));
                } else {
                    resolve();
                }
            });
        }, 1000);
    });
}

checkFileExists('/path/to/file.txt')
    .then(() => {
        console.log('File exists');
    })
    .catch((error) => {
        console.log('Error:', error.message);
    });
