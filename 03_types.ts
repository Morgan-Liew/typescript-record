// 直接使用字面量进行类型声明

let a: 10;
a = 10;

// 可以使用 | 连接多个类型(联合类型)
let b: 'male' | 'female';
b = "male";
b = "female";

// any => 表示任意类型，相当于对该变量关闭TS的类型检测,TS中不推荐
let c:any;
c = 10;
c = 'hello';
c = false;

// unknown 表示未知类型的值,实际上是一个类型安全的any，该类型的变量不能直接赋值给其他变量
let d:unknown;
d = 10;
d = 'hello';
d = true;

let e;
if(typeof e === 'string'){
    e = d;
}

// 类型断言，可以用来告诉解析器变量的实际类型
/* 语法：
*      变量 as 类型
*      <类型>变量
*
* */
let f = d as string;
let g = <number>d;

// void 用来表示空
function fn(): void{
    return undefined; // return | return null
}

// never 没有值,表示永远不会返回结果
function fn2(): never {
    throw new Error('err !')
}

