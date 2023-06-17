// 1. Write a method that returns a deep array like [[key, value]]
// Expected Result: makePairs({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
const markePairs1 = (objList) => {
    if (typeof objList !== "object" || objList === null) return [];
    return Object.entries(objList);
};
console.log(markePairs1({ a: 1, b: 2 }));

const markePairs2 = (objList) => {
    if (typeof objList !== "object" || objList === null) return [];

    const newArray = [];
    for (const key in objList) {
        newArray.push([key, objList[key]]);
    }
    return newArray;
};
console.log(markePairs2({ a: 1, b: 2 }));

// 2. Write a method that returns new object without provided properties
// Expected Result: without({ a: 1, b: 2 }, 'b') => { a: 1 }
const without = (objectList, char) => {
    if (
        typeof objectList !== "object" ||
        typeof char !== "string" ||
        objectList === null ||
        char === ""
    )
        return {};

    delete objectList[char];
    return objectList;
};

console.log(without({ a: 1, b: 2 }, "b"));

// 3. Write a method that makes a shallow check is object empty
// Expected Result: isEmpty({}) => true, isEmpty({ a: undefined }) => true, ({ a: 1 }) => false
const isEmpty = (objectList) => {
    for (const key in objectList) {
        if (objectList[key] !== undefined) return false;
    }
    return true;
};
console.log(isEmpty({}));
console.log(isEmpty({ a: undefined }));
console.log(isEmpty({ a: 1 }));
// 4. Write a method that makes a shallow compare of two objects
// Expected Result: True if objects are identical, false if objects are different isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
const isEqual = (obj1, obj2) => {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);
    if (keysObj1.length !== keysObj2.length) return false;

    for (let i = 0; i < keysObj1.length; i++) {
        if (
            keysObj1[i] !== keysObj2[i] ||
            obj1[keysObj1[i]] !== obj2[keysObj2[i]]
        )
            return false;
    }
    return true;
};
console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }));

// 5. Write a method that finds shallow intersections of objects
// Expected Result: intersections({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
const intersections = (object1, object2) => {
    if (typeof object1 !== "object" || typeof object2 !== "object") return {};

    const newObject = {};
    for (const key in object1) {
        if (object2.hasOwnProperty(key) && object1[key] === object2[key])
            newObject[key] = object1[key];
    }
    return newObject;
};

console.log(intersections({ a: 1, b: 2 }, { c: 1, b: 2 }));
