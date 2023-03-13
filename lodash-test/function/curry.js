/**
 * curry(func)
 * 柯里化：减少函数入参
 */
const curry = (func) => {
    return function curried(...args1) {
        // func.length: 参数的个数
        if (args1.length >= func.length) {
            return func.apply(this, args1);
        } else {
            return function (...args2) {
                return curried.apply(this, args1.concat(args2));
            };
        }
    };
};

const abc = (a, b, c) => {
    return [a, b, c];
};
const curried = curry(abc);
console.log(curried(1)(2)(3));
