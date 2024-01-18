/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = []
    arr.filter((element, index)=>{
        fn(element, index) ? filteredArr.push(element) : null
    })
    return filteredArr
    
};