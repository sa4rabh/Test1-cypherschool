function multiplyByTwo(number, callback) {
    const result = number * 2;
    callback(result);
}

function callback(result) {
    console.log('Result:', result);
}

multiplyByTwo(5, callback);
