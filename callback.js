var arr = [1,2,3,4]

function pushar (arr, callback) {
    arr.push(100)
    callback()
}

pushar (arr, () =>{
    console.log("new array" + arr);
})