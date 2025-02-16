const son = {
    name: '손흥민',
    age: 30,
    nationality: '한국',
    team: '토트넘',
    position: '공격수',
};

function newYear(player) {
    player.age += 1;
    console.log(player.age);
}

//newYear(son);
//console.log(son.age);

function plus(a, b) {
    return a + b;
}
//console.log(plus(1, 2));

function divide(a, b) {
    return a / b;
}
// divide support auto typecasting (int -> float)
//console.log(divide(1, 2));


const player = {
    name: 'newbie',
    age: 30,
    nationality: '한국',
    team: '토트넘',
    position: '공격수',
    newYear: function() {
        this.age += 1;
    },
    printInfo: function() {
        console.log(this.name, this.age, this.nationality, this.team, this.position);
    }
};

player.newYear();
player.printInfo();

