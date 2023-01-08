var st = "Welcome to this interview"

function revst(str){
    console.log(str.split('').reverse().join(''));
    str = str.split('').reverse().join('')
    console.log(str.split(' ').reverse().join(' '));
}

revst(st)