//2.1 Fonctions simples
let sayHello = () => {
    console.log('Hello')
};

let sayMyName = (first, last) => {
    console.log(first, last)
};

let sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
};

sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis:() => {
        console.log(this)
    }
};

object.showThis();

//----------------------//
//2.3 Application

let odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => {
        console.log('Hello');
    },
    sayMyName: () => {
        console.log(odile.name.first, odile.name.last);
    },
    sayMyAge: () => {
        console.log('You are ' + odile.age + ' years old');
    }
};

odile.sayHello();
odile.sayMyName();
odile.sayMyAge();
