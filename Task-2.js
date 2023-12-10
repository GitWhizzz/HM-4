// Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

function isPalindrome(str) {
    let stringReworked = str.toLowerCase().replace(/[^a-z0-9а-яё]/g, '');

    for (let i = 0, j = stringReworked.length - 1; i < j; i++, j--) {
        if (stringReworked[i] !== stringReworked[j]) {
            return false;
        }
    }
    return true;
};

let stringInput = 'Учуя молоко, я около мяучу';
console.log(isPalindrome(stringInput));