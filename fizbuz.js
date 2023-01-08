for (var i =1; i<=30; i++) {
    fiz = i % 3 == 0
    bus = i % 5 == 0
    console.log(fiz ? (bus ? "fizbuz" : 'fiz') : bus ? "buz" : i);
}