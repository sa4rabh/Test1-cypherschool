function reverseNumber(number) {
    let reversedNumber = 0;

    while (number > 0) {
        reversedNumber = (reversedNumber * 10) + (number % 10);
        number = Math.floor(number / 10);
    }

    return reversedNumber;
}

const input = 12345;
const reversed = reverseNumber(input);

console.log(reversed);
