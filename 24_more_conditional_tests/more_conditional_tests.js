"use strict";
// Equality test 1
console.log("Equality test with string :", "Apple" === "Apple");
// Equality test with string : true
// ineqality test 2
console.log("inequality test with string :", "Apple" == "orange");
;
// inequality test with string : false
// using the lower case function test 3
console.log("lower case function test: ", "MOHSIN".toLowerCase() === "mohsin");
// lower case function test:  true
// using the Upper case function test 4
console.log("lower case function test: ", "MOHSIN".toUpperCase() === "mohsin");
// lower case function test:  false
// Equality test with numbers test 5
console.log("Equality test with numbers:", 26 === 26);
// Equality test with numbers: true
// Equality test with numbers test 6
console.log("Equality test with numbers:", 26 == 24);
// Equality test with numbers: false
// greater then & less then test 7
console.log("greater then & less then test:", 10 > 5);
// greater then & less then test: true
// greater then & less then test 8
console.log("greater then & less then test:", 5 > 10);
// greater then & less then test: false
// greater then or equal to test 9
console.log("greater then or equal to test:", 10 >= 10);
// greater then or equal to test: true
// less then or equal to test 10
console.log("less then or equal to test:", 10 <= 9);
// less then or equal to test false
// using "and"  operator test 11
console.log("using and operator test:", 10 === 10 && 10 <= 10);
// using and operator test: true
// using "and"  operator test 12
console.log("using and operator test:", 10 === 10 && 10 < 10);
// using and operator test: false
// using "or"  operator test 13
console.log("using or operator test:", 10 === 10 || 10 < 10);
// using or operator test: true
// using "or"  operator test 14
console.log("using or operator test:", 10 === 9 || 10 < 10);
// 
// test whether an item is in array test 15
let fruits = ["Apple", "Banana", "mango"];
console.log('test "Apple" in array:', fruits.includes("Apple"));
// test "Apple" in array: true
// test whether an item is not in  array test 15
console.log('test "straburry" in array:', fruits.includes("straburry"));
// test "straburry" in array: false
