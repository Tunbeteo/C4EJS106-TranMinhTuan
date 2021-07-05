

function checkPalindrome(str) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}
const string = prompt('Enter a string: ');
checkPalindrome(string);