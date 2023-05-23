//1. Tập đặt tên biến với từ khóa `let`, `const` càng nhiều càng tốt, sử dụng các kiểu dữ liệu đã học như null, undefined, number, string, boolean
const firstName = "Cuong";
const age = 18;
let isStudent = false;
let primarySchool = undefined;
let className = null;

//2. Tạo ra random số từ 100 - 1000
const min = 100;
const max = 1000;
const randomFromToNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomFromToNumber);

//3. Cho 1 số là 1.234567 dùng các kiến thức đã học để làm tròn thành 1.2345
const number = 1.234567;
const resultNumber = Math.floor(number * 10000) / 10000;
console.log(resultNumber);

//4. Viết 1 đoạn code ví dụ có Hoisting
console.log(myClass);
var myClass = "10A5";

//5. Viết 1 đoạn code ví dụ có Temporal Dead Zone
console.log(mySchool);
let mySchool = "Evondev School";

console.log(myAddress);
const myAddress = "123/456 Nguyen Van Cu, Quan 5";
