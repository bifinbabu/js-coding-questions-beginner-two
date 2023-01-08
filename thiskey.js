var bar = "global"

function foo(){
    console.log(this.bar);
}


obj1 = {
    bar : "firdt bar",
    foo: foo
}

obj2 = {
    bar: "sbar"
}

foo()
obj1.foo()
foo.call(obj2)
foo.call(obj1)