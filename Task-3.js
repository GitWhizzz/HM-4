// Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.

function findGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (a != 0) {
        let remainder = b % a;
        b = a;
        a = remainder;
    }

    return b;
}

console.log(findGCD(0, 20));
console.log(findGCD(20, 0));
console.log(findGCD(0, 0));
console.log(findGCD(30, 45));

