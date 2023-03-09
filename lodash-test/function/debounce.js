/**
 * debounce(func, wait)
 * 1. 正常防抖，先等待后调用
 * 2. 立即调用，后面等待时间内点击无效 (点击购买按钮)
 * options: {
 *  leading: true; 立即调用
 *  trailing: true; 延迟调用
 * }
 * 立即调用情况下因为
 */
const debounce = (func, wait, options) => {
    let timer = null;
    const { leading, trailing } = options;

    return (...args) => {
        if (leading && !timer) {
            // 立即调用
            func(...args);
        }
        if (timer) {
            // 已经存在就清除定时器
            clearTimeout(timer);
        }
        // 重新赋值
        timer = setTimeout(() => {
            clearTimeout(timer);
            if (trailing) {
                func(...args);
            }
        }, wait);
    };
};
const debounceFunc = debounce((...args) => {
    console.log("参数:", args);
}, 1000);
let count = 0;
let intervalTimer = setInterval(() => {
    debounceFunc(count);
    count++;
    if (count === 10) {
        clearInterval(intervalTimer);
    }
}, 500);
