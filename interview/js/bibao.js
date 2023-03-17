/**
 * 闭包基本概念、常见面试题
 */
/**
 * 闭包是指在一个函数内部定义的函数，这个内部函数可以访问到外部函数作用域中的变量、参数和函数，
 * 即使外部函数已经执行完毕并返回了，内部函数仍然可以访问到这些变量和参数。这是因为内部函数形成了一个闭包，
 * 它将外部函数的作用域包含在内部，使得这些变量和参数在内部函数中仍然是可用的
 *
 * 闭包可以用来创建私有变量、缓存数据、封装函数等
 * 场景: 防抖函数
 */
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
let counter = createCounter();
counter(); // 输出 1
counter(); // 输出 2
counter(); // 输出 3
