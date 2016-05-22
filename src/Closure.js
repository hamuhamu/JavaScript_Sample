'use strict';

let closure = function() {
    let counter = 1;

    return function() {
        return counter++;
    };
};

var func = closure();
console.log(func());
console.log(func());

console.log(closure()());
console.log(closure()());
