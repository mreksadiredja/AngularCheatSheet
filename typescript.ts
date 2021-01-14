//
// Build
//
// $tsc typescript.ts
// $node typescript.js
//

//
// Variable
//
for (let i = 0; i < 5; i++) {
}

// console.log(i); //Compile error

for (var j = 0; j < 5; j++) {
}

// No error, because j is recognize as a global variable
console.log(j);

//
// Type
//
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
enum Color { Red, Blue, Green }

//
// Type Assertion
//
let msg;
msg = 'abc';
// let result = (<string>msg).endsWith('c')
// let result2 = (msg as string).endsWith('c');

//
// Function
//
let log = function (msg) {
    console.log(msg);
}

log('test');

let log2 = (msg) => {
    console.log(msg);
}

log2('test2');

//
// Interface
//
interface Point{
    x: number,
    y: number
}

let draw = function (pt: Point) {
    console.log(pt.x);
    console.log(pt.y);
}

draw({ x: 5, y: 10 });

//
// Class
//
class Point2{
    x: number;
    y: number;

    draw(){
        console.log(this.x);
        console.log(this.y);
    }
}

let pt2 = new Point2();
pt2.x = 3;
pt2.y = 4;
pt2.draw();