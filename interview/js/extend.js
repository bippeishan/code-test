/**
 * 继承基本概念、常见面试题
 */
/**
 * 继承是一种实现代码重用的机制，允许子类继承父类的属性和方法
 * 继承有原型链继承、构造函数继承、组合继承、寄生组合式继承、class继承等多种方式
 */

/**
 * 实现继承的几种常见方式
 */
/**
 * 原型链继承: 让子类的原型对象指向父类的实例来实现继承
 * 缺点: 所有子类实例共享同一个父类实例，容易出现属性污染的问题
 */
function Parent() {
    this.name = "parent";
}
Parent.prototype.sayHello = function () {
    console.log("Hello from parent");
};
function Child() {}
Child.prototype = new Parent();

/**
 * 构造函数继承: 在子类的构造函数中调用父类构造函数并使用 call 或 apply 方法来实现继承
 * 缺点: 无法继承父类原型上的方法
 */
function Parent() {
    this.name = "parent";
}
function Child() {
    Parent.call(this);
}

/**
 * 组合继承: 同时使用原型链继承和构造函数继承
 * 缺点: 需要创建父类实例
 */
function Parent() {
    this.name = "parent";
}
Parent.prototype.sayHello = function () {
    console.log("Hello from parent");
};
function Child() {
    Parent.call(this);
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

/**
 * 寄生组合式继承: 创建一个中间函数来实现继承，避免了在子类的原型对象上创建多余的父类实例
 */
function Parent() {
    this.name = "parent";
}
Parent.prototype.sayHello = function () {
    console.log("Hello from parent");
};
function Child() {
    Parent.call(this);
}
function inheritPrototype(child, parent) {
    var prototype = Object.create(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}
inheritPrototype(Child, Parent);

// class继承
class Parent {
    constructor() {
        this.name = "parent";
    }
    sayHello() {
        console.log("Hello from parent");
    }
}
class Child extends Parent {
    constructor() {
        super();
    }
}

/**
 * es6的class是怎么实现继承的
 */
