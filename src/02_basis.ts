// 声明一个变量a，同时指定它的类型
let a2:number;

a2 = 10;
a2 = 33;
// a = 'hello' -> err

// JS中的函数不考虑参数的类型和个数
// TS
function sum(a:number,b:number): number{
    return a + b;
}

console.log(sum(15,456));