/**
 * 1.
 * const str = "I love to learn Javascript";
 * expected: "i-love-to-learn-javascript"
 */

const str = "I love to learn Javascript";
// cách 1:
console.log(str.toLowerCase().split(" ").join("-"));
// cách 2"
console.log(str.toLowerCase().replaceAll(" ", "-"));

/////////////////////////////////////////////////////////////////////////////////
/**
 * 2. Cắt chuỗi còn 30 kí tự cùng với dấu 3 chấm ...
 * const longStr = "Write a JavaScript function to split a string and convert it into an array of words";
 * expected: Write a JavaScript function to ...
 */
const longStr =
    "Write a JavaScript function to split a string and convert it into an array of words";
console.log(longStr.slice(0, 30) + "...");

/////////////////////////////////////////////////////////////////////////////////
/**
 * 3. Chuyển đổi chuỗi để được kết quả như dưới
 * const newStr = `javascript is awesome`;
 * expected: Javascript is awesome
 */

const newStr = `javascript is awesome`;
console.log(newStr[0].toUpperCase() + newStr.slice(1));

/////////////////////////////////////////////////////////////////////////////////
/**
 * 4. Type coercion
 * 1 + "1" + 5 + 7 -> "1157"
 * null + undefined -> NaN
 * null + '' + false + 1 -> 'nullfalse1'
 * false + true -> 0 + 1 -> 1
 * 'true' + false -> 'truefalse'
 * !!'0' + Boolean('1') -> 2
 * !'false' + 9 -> 9
 * 'js' + +'59' -> 'js59'
 * 'evondev' + -'frontend' -> 'evondevNaN'
 * true == 'true' -> false
 */

/////////////////////////////////////////////////////////////////////////////////
/**
 * 5. Tự viết đoạn code có sử dụng if/else, switch/case, ternary operator tùy ý
 */

/////////////////////////////// IF/ELSE ///////////////////////////////
const avg = "abc";

if (avg <= 10 && avg >= 0 && typeof avg === "number") {
    if (avg > 5) {
        console.log("Điểm của bạn trên trung bình");
    } else if (avg === 5) {
        console.log("Điểm của bạn đạt mức trung bình");
    } else {
        console.log("Điểm của bạn dưới trung bình");
    }
} else {
    console.log(
        "Điểm của bạn phải là chữ số từ 0 đến 10, xin mời nhập đúng số điểm"
    );
}

/////////////////////////////// SWITCH/CASE ///////////////////////////////
const day = "thu4";
switch (day) {
    case "thu2":
        console.log("Hôm nay là thứ 2");
        break;

    case "thu3":
        console.log("Hôm nay là thứ 3");
        break;

    case "thu4":
        console.log("Hôm nay là thứ 4");
        break;

    case "thu5":
        console.log("Hôm nay là thứ 5");
        break;

    case "thu6":
        console.log("Hôm nay là thứ 6");
        break;

    case "thu7":
        console.log("Hôm nay là thứ 7");
        break;

    case "chunhat":
        console.log("Hôm nay là chủ nhật");
        break;

    default:
        console.log("Không xác định");
        break;
}

/////////////////////////////// TERNARY OPERATOR ///////////////////////////////
const money = 1;
console.log(money >= 1 ? "Có tiền" : "Không có tiền");
