/**
 * this 基本概念，常见面试题
 */
/**
 * this 的值是在函数执行时确定的，它的值取决于函数调用的方式
 * 在函数中，如果函数作为对象的方法调用，则 this 指向该对象；如果函数作为普通函数调用，则 this 指向全局对象
 * 在构造函数中，this 指向新创建的对象
 * 在事件处理函数中，this 指向触发事件的元素
 * 在箭头函数中，this 的值取决于它定义时的上下文环境，而不是函数被调用时的上下文环境
 */
console.log(this); // 输出全局对象
function foo() {
    console.log(this);
}
foo(); // 输出全局对象
let obj = {
    name: "Tom",
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
obj.greet(); // 输出 "Hello, Tom!"
let Person = function (name) {
    this.name = name;
};
let person1 = new Person("Alice");
console.log(person1.name); // 输出 "Alice"

/**
 * new操作执行了哪些步骤
 * 1. 创建一个空的对象，并将该对象的原型指向函数的 prototype 属性
 * 2. 将这个空对象作为函数调用时的 this 值，即函数内部的 this 指向这个新创建的对象
 * 3. 执行函数体内的代码，将属性和方法添加到 this 对象中
 * 4. 如果函数没有返回对象，则返回 this 对象
 */

/**
 * bind/call/apply的作用和区别
 */
