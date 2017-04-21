import Test from "./load";


console.log(Test());
let at = {a:1,b:2,c:{a:1}}
let cc = {...at};
//console.log(at);
cc.a = 3;
//console.log(cc);

const [a,c, ...b] = [[1], 2, [1,2,3]];
//console.log(a);
//console.log(b);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(z);