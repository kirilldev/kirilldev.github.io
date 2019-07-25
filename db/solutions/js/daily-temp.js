/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const res = (new Array(T.length)).fill(0);
    const stack = [];

    T.forEach((el, i) => {
         while (stack.length && stack[stack.length - 1].el < el) {
            const temp = stack.pop(); 
            res[x.i] = i - x.i;
         } 
            
         stack.push({el, i});
    });
    

    return res;
};
