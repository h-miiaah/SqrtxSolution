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
        else if (middle * middle > x) right = middle
        else left = middle + 1
    }

    return left - 1
};


/*

- start with a left variable of 1 and a right variable of x
- loop while left variable is less than right variable
- calculate the middle value of the left and right variables
- check if the middle variable value squared is equal to x
- if it is, then we return the middle variable value
- if it isn’t, then we check if the middle variable value squared is greater than x
- if it is, then we update the right variable to be the middle variable value
- If it isn’t, then we update the left variable to be the middle variable value plus one

*/