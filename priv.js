function priv (){
    var privt = "prvt var"

    return function() {
        console.log(privt);
    }
}

priv()()
x= priv()
x()