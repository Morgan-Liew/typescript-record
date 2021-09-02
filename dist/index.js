// 定义类
class Person {
    constructor() {
        // 定义实例属性
        this.name = 'morgan';
        this.age = 25;
        this.gender = 'male';
        console.log(this);
    }
}
const per = new Person();
console.log(per);
console.log(per.name, per.age, per.gender);
