/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let temp = x;
        functions.reverse().forEach((func) =>{
            temp = func(temp)
        })
        return temp
    }   
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */