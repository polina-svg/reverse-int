module.exports = function reverse (n) {
    let stringN = String(n);
    let arr = String(n).split('')
    if (arr[0] === '-'){
      // arr.spliсe(1).reverse().join('')
      return arr.splice(1).reverse().join("")
      
      
      
    }else{
        return arr.reverse().join('')
    }
}
