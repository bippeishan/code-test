/**
 * 原型基本概念、常见面试题
 */

/**
 * 原型
 * 每个对象都有一个内部属性[prototype] (可以通过object.getPrototypeof()或者__proto__访问) ，它只想该对象的原型
 * 如果原型是一个对象，这个对象也有自己的原型，这样就形成了原型链
 *
 * 原型可以实现对象之间的继承：
 * 定义构造函数，函数内部定义变量，在prototype上定义方法
 * new 构造函数，所有实例可以拥有自己的变量，和所有原型上的方法
 */
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};
var person1 = new Person("Alice");
var person2 = new Person("Bob");
person1.sayHello(); // 输出 "Hello, my name is Alice"
person2.sayHello(); // 输出 "Hello, my name is Bob"
