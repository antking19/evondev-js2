// 1. Write function to check if number is even, fn(2) -> true, fn(3) -> false
// cách 1:
function checkNumberIsEven(number) {
    if (typeof number === "number" && number % 2 === 0) {
        return true;
    }
    return false;
}
console.log(checkNumberIsEven(2));

// cách 2:
function isEven(number) {
    return typeof number === "number" && number % 2 === 0 ? true : false;
}

// 2. Write function to convert string to prefix string, example: fn('i love to learn','\_') -> 'i_love_to_learn'
function convertStringToPrefix(str, character) {
    if (typeof str === "string") {
        return str.toLowerCase().split(" ").join(character);
    }
    return false;
}
console.log(convertStringToPrefix(1, "_"));

// 3. Write function to calculate age, example: fn(1994) -> 29
function calculateAge(birthYear) {
    const year = new Date();
    const nowYear = year.getFullYear();
    if (
        typeof birthYear === "number" &&
        birthYear > 0 &&
        birthYear <= nowYear
    ) {
        return nowYear - birthYear;
    }
    return "Năm sinh không hợp lệ";
}
console.log(calculateAge(1994));

// 4. Write any function using closure
const showName = () => {
    const firstName = "Cuong";

    const fullName = () => {
        return `${firstName} Truong`;
    };

    return fullName;
};

const addName = showName();
console.log(addName());

// 5. Write function sum of three numbers, fn(a,b,c)
const sumThreeNumbers = (a, b, c) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
        return;

    return a + b + c;
};
console.log(sumThreeNumbers(10, 20, 30));

// 6. Write function to get random number from min to max
const randomNumberMinToMax = function (min, max) {
    if (typeof min !== "number" || typeof max !== "number") return;

    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomNumberMinToMax(10, 100));

// 7. Write function return typeof value, fn('evondev') -> string
function checkTypeofValue(value) {
    return typeof value;
}

console.log(checkTypeofValue("evondev"));

// 8. Write function to check if str includes word, fn("evondev", "vonz") -> false
function isIncludesWord(str, strCheck) {
    if (typeof str !== "string" || typeof strCheck !== "string") return false;

    return str.includes(strCheck);
}
console.log(isIncludesWord("evondev", "vonz"));

// 9. Write function that have use `callback`
const threeNumbers = (a, b, c, callback) => {
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        typeof c !== "number" ||
        typeof callback !== "function"
    )
        return;

    return callback(a, b, c);
};

const avgThreeNumbers = (a, b, c) => (a + b + c) / 3;

console.log(threeNumbers(10, 20, 30, avgThreeNumbers));

// 10. Good luck, function must check input parameters for best results
