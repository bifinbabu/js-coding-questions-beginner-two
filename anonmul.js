function mul(x) {
    return function(y) {
        return function(z) {
            return x*y*z
        }
    }
}





console.log(mul(2)(4)(3));
console.log(mul(4)(5)(2));