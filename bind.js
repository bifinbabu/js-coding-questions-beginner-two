person = {
    name: "sfhfd",
    hdfj: function() {
        console.log(this.name);
    }
}

prt = {
    name: "jhf"
}

x = person.hdfj.bind(prt)
x()