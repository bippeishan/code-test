/**
 * chunk(array, size)
 *
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 */
const chunk = (arr, size) => {
    // 差异: 针对arr和size做了边界处理
    // 向上取整
    const sizelen = Math.ceil(arr.length / size);
    let result = [];
    let count = 0,
        start = 0;

    // 差异: 这边处理是一样的, 用的是lodash内部的slice
    while (count < sizelen) {
        // slice, 开始到结束，不包含结束，不改变原数组
        const subArr = arr.slice(start, start + size);
        result.push(subArr);
        start += size;
        count++;
    }
    console.log("result:", result);
    return result;
};
// chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);

/**
 * flatten(array, n)
 * 数组减少一个层级
 */
const flatten = (arr) => {
    const result = [];

    return result;
};
flatten([1, [2, 3], [4, 5, [6, 7, 8]]]);

/**
 * flattenN(array)
 * 数组打平到1层
 * lodash只有减少一级的功能
 */
const flattenN = (arr) => {};
// flattenN([1, [2, 3], [4, 5, [6, 7, 8]]]);

/**
 * difference(array, [values]*)
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * （注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
 */
const difference = (arr, ...arrValues) => {
    const result = 0;
    // 数组打平
    const newArrValues = [];

    arr.forEach((it) => {});
};
// difference([3, 6, 8], [1, 3], [4, 6]);
