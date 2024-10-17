"use strict";
function greet(a, b) {
    return a + b;
}
console.log(greet(5, 4));
// how to give type of a function 
// () shows that there are no arguments in fn
// void shows that theres no return in this fn
function runafter1sec(fn) {
    setTimeout(fn, 1000);
}
runafter1sec(() => {
    console.log("hi there");
});
