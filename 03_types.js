// 直接使用字面量进行类型声明
var a;
a = 10;
// 可以使用 | 连接多个类型(联合类型)
var b;
b = "male";
b = "female";
// any => 表示任意类型，相当于对该变量关闭TS的类型检测,TS中不推荐
var c;
c = 10;
c = 'hello';
c = false;
// unknown 表示未知类型的值,实际上是一个类型安全的any，该类型的变量不能直接赋值给其他变量
var d;
d = 10;
d = 'hello';
d = true;
var e;
if (typeof e === 'string') {
    e = d;
}
// 类型断言，可以用来告诉解析器变量的实际类型
/* 语法：
*      变量 as 类型
*      <类型>变量
*
* */
var f = d;
var g = d;
// void 用来表示空
function fn() {
    return undefined; // return | return null
}
// never 没有值,表示永远不会返回结果
function fn2() {
    throw new Error('err !');
}
// object 表示一个对象
var h;
h: { }
h = function () { };
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 属性名后加？，表示属性是可选的
var h2;
h2 = { name: 'morgan' };
// [propName: string]:any 表示 任意类型的属性
var h3;
h3 = { name: 'morgan', age: '18', gender: 'male' };
// 设置函数结构的类型声明
// 语法： (形参：类型，形参：类型 ...)：类型 => 返回值
var h4;
h4 = function (n1, n2) {
    return n1 + n2;
};
/*
*  数组类型声明
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
var arr;
arr = ['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'];
// number[] 表示数值数组
var arr2;
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
/*
* 元组，固定长度的数组
*      语法：[类型，类型，类型]
* */
var tuple;
tuple = ['hello', 'morgan', 123];
/*
*  enum 枚举
* */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'morgan',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
// & 表示同时
var j;
