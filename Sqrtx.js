/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let left = 1;
    let right = x;

    if(x < 2) return x;

    while(left < right) {
        const middle = Math.floor((left + right) / 2)

        if (middle * middle === x) return middle
    }
};