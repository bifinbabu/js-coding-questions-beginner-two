person = {
    name: "hsf",
    gyds: function() {
        console.log(this.name);
    }
}

pet = {

    name: "dgv"
}

person.gyds.call(pet)