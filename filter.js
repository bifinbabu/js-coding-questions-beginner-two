var ages = [1,2,3,4]

var res = ages.filter(agelim)


function agelim(age) {
    if (age > 2) return age
}

console.log(res);