function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const input = "racecar";
const isPalindromeResult = isPalindrome(input);

console.log(isPalindromeResult);

