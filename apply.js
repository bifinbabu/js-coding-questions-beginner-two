person = {
    name: "dsb",
    gigs : function () {
        console.log(this.name);
    }
}

persi = {
    name: "dsh"
}

person.gigs.apply(persi)