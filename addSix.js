addsix = basevar(6)

addsix(10)
addsix(5)

basevar(6)(8)

function basevar(base) {
    return function (number) {
        console.log((base+number));
    }
}