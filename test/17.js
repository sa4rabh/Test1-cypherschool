function calculateSum(numbers, callback) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    callback(sum);
}

function callback(sum) {
    console.log('Sum:', sum);
}

calculateSum([2, 4, 6, 8], callback);
