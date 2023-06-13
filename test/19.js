function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        if (randomNumber >= 5) {
            resolve(randomNumber);
        } else {
            reject(new Error('Generated number is less than 5'));
        }
    });
}

getRandomNumber()
    .then((randomNumber) => {
        console.log('Resolved:', randomNumber);
    })
    .catch((error) => {
        console.log('Rejected:', error.message);
    });
