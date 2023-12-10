// Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.

function reverseString(str) {
    let chars = Array.from(str);

    for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
        let temp;
        temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }
    return chars.join('');
};

let stringInput = 'Svetlana Sveta';
console.log(reverseString(stringInput));