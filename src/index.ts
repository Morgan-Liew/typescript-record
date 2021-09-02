// 定义类
class Person{
    name:string = 'morgan';
    age:number = 25;
    gender: 'male' | 'female' = 'male';
}

const per = new Person();
console.log(per);
console.log(per.name,per.age,per.gender);