//
// Build
//
// $tsc typescript.ts
// $node typescript.js
//
//
// Variable
//
for (var i = 0; i < 5; i++) {
}
// console.log(i); //Compile error
for (var j = 0; j < 5; j++) {
}
// No error, because j is recognize as a global variable
console.log(j);
//
// Type
//
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
//
// Type Assertion
//
var msg;
msg = 'abc';
// let result = (<string>msg).endsWith('c')
// let result2 = (msg as string).endsWith('c');
//
// Function
//
var log = function (msg) {
    console.log(msg);
};
log('test');
var log2 = function (msg) {
    console.log(msg);
};
log2('test2');
var draw = function (pt) {
    console.log(pt.x);
    console.log(pt.y);
};
draw({ x: 5, y: 10 });
//
// Class
//
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log(this.x);
        console.log(this.y);
    };
    return Point2;
}());
var pt2 = new Point2();
pt2.x = 3;
pt2.y = 4;
pt2.draw();
