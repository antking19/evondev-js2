// ## Basic

// 1. Write a function that creates a new array with given values fn(3, 'a') -> ['a','a','a']
function givenValue(n, str) {
    if (typeof n !== "number" || n < 0 || typeof str !== "string") return [];
    const newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(str);
    }
    return newArray;
}
console.log(givenValue(3, "a"));

// 2. Write a function that reverts input array: input: [1,2,3] -> results: [3,2,1]
const reverseArray = (arrayList) => {
    if (!Array.isArray(arrayList) || arrayList.length === 0) return [];
    return arrayList.sort((a, b) => b - a);
};

console.log(reverseArray([1, 10, 20, 100, 1000, 400]));

// 3. Write a function that remove unnecessary elements, like false, undefined, empty strings, zero, null. input: [0, 1, false, 2, undefined, '', 3, null] => results: [1, 2, 3]
const filterTruthyValue = (arrayList) => {
    if (!Array.isArray(arrayList) || arrayList.length === 0) return [];

    return arrayList.filter((item) => Boolean(item) === true);
};
console.log(filterTruthyValue([0, 1, false, 2, undefined, "", 3, null]));

// 4. Write a function that returns an array without listed values: without(array, value) -> without([1,2,3,1,5,7,1], 1) -> [2,3,5,7]
const withoutListValues = (arrayList, num) => {
    if (
        !Array.isArray(arrayList) ||
        arrayList.length <= 0 ||
        typeof num !== "number"
    )
        return undefined;

    return arrayList.filter((item) => item !== num);
};
console.log(withoutListValues([1, 2, 3, 1, 5, 7, 1], 1));

// 5. Write a function that returns a duplicate-free array. input: [1, 2, 3, 1, 2] => results: [1, 2, 3]
const removeDuplicateValueInArray = (arrayList) => {
    if (!Array.isArray(arrayList) || arrayList.length === 0) return [];
    return arrayList.filter((item, index, arr) => arr.indexOf(item) === index);
};
console.log(removeDuplicateValueInArray([1, 2, 3, 1, 2]));

// 6. Write a function that splits an array into parts of determined size(chunk(array, size)): input: chunk([1, 2, 3, 4, 5], 2) => results: [[1, 2], [3, 4], [5]],
function chunk(arrayList, chunkSize) {
    if (!Array.isArray(arrayList) || arrayList.length <= 0) return [];
    if (
        typeof chunkSize !== "number" ||
        chunkSize >= arrayList.length ||
        chunkSize <= 0
    )
        return arrayList;
    const newArray = [];
    let i = 0;
    while (i < arrayList.length) {
        const chunk = arrayList.slice(i, i + chunkSize);
        newArray.push(chunk);
        i += chunkSize;
    }

    return newArray;
}
console.log(chunk([1, 2, 3, 4, 5], 2));

// 7. Write a function to print Even numbers in given array: input [13,23,12,45,22,48,66,100] -> [12,22,48,66,100]
const isEvenNumbers = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    const newNumberList = [];

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 === 0 && typeof numberList[i] === "number")
            newNumberList.push(numberList[i]);
    }
    return newNumberList;
};
console.log(isEvenNumbers([13, 23, 12, 45, 22, 48, 66, 100]));

// 8. Write a function to find the largest number in an array: input [2, 45, 3, 67, 34, 567, 34, 345, 123] -> result: 567
function largestNumber(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;

    numberList.sort((a, b) => a - b);
    return numberList[numberList.length - 1];
}
console.log(largestNumber([2, 45, 3, 67, 34, 567, 34, 345, 123]));

const largestNumber2 = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;

    let max = 0;
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] >= max) max = numberList[i];
    }
    return max;
};

console.log(largestNumber2([2, 45, 3, 67, 34, 567, 34, 345, 123]));

// 9. Write a function to find duplicate values in a given array: input [4,2,34,4,1,12,1,4] -> results: [4, 1]. Bài này tìm hiểu phương thức lastIndexOf của mảng nhé

const duplicateValueInArray = (arrayList) => {
    if (!Array.isArray(arrayList) || arrayList.length === 0) return [];
    const duplicates = arrayList.filter(
        (item, index, arr) => arr.lastIndexOf(item) !== index
    );
    return [...new Set(duplicates)];
};
console.log(duplicateValueInArray([4, 2, 34, 4, 1, 12, 1, 4]));

// ## Advanced

// 1. Viết một function có chức năng tương tự phương thức `map` của mảng
const map = (arr, mappingFn) => {
    if (!Array.isArray(arr) || typeof mappingFn !== "function")
        return undefined;

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const newElement = mappingFn(element, i, arr);
        newArray.push(newElement);
    }

    return newArray;
};

console.log(map([1, 2, 3], (x) => x * 2));

// 2. Viết một function có chức năng tương tự phương thức `filter` của mảng
const filter = (arr, filterFn) => {
    if (!Array.isArray(arr) || typeof filterFn !== "function") return undefined;

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (filterFn(element, i, arr)) {
            newArray.push(element);
        }
    }

    return newArray;
};

console.log(filter([1, 2, 3, 4, 5, 6], (x) => x > 3));

// 3. Viết một function có chức năng tương tự phương thức `some` của mảng
const some = (arr, someFn) => {
    if (!Array.isArray(arr) || typeof someFn !== "function") return undefined;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (someFn(element, i, arr)) return true;
    }

    return false;
};

console.log(some([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0));
console.log(some([1, 3, 5, 7, 9], (x) => x % 2 === 0));

// 4. Viết một function có chức năng tương tự phương thức `every` của mảng
const every = (arr, everyFn) => {
    if (!Array.isArray(arr) || typeof everyFn !== "function") return undefined;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!everyFn(element, i, arr)) return false;
    }

    return true;
};

console.log(every([1, 30, 39, 50, 10, 13], (x) => x < 40));

// 5. Viết một function có chức năng tương tự phương thức `reduce` của mảng
function reduce(arr, callbackFn, initialValue) {
    if (!Array.isArray(arr) || typeof callbackFn !== "function") {
        return "Invalid parameters";
    }

    if (arr.length === 0) {
        if (initialValue === undefined) {
            return "Should have initialValue when arr is empty";
        }
        return initialValue;
    }

    const hasInitialValue = initialValue !== undefined;
    const startIndex = hasInitialValue ? 0 : 1;
    let accumulator = hasInitialValue ? initialValue : arr[0];

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callbackFn(accumulator, arr[i], i);
    }

    return accumulator;
}

console.log(reduce([1, 2, 3, 4, 5], (acc, current) => acc + current, 0));
