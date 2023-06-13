function getUserData(callback) {
    setTimeout(() => {
        const user = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            age: 25
        };
        callback(user);
    }, 2000);
}

function callback(user) {
    console.log('User Data:');
    console.log(user);
}

getUserData(callback);
