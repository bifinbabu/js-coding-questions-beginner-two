var st = "Mary"
var ft = "Army"

angchk(st, ft)

function angchk(str1, str2) {
    a = str1.toLowerCase()
    b = str2.toLowerCase()

    a = a.split('').sort().join()
    b = b.split('').sort().join()

    if (a == b) console.log("ang");
    else console.log("Nang");
}