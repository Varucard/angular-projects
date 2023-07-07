export class Person {

    constructor(
        public name: string,
        private address: string = 'No Address'
    ) {}
}

/*
export class Heroe extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super(realName, 'New York');
    }
}
*/

export class Heroe {

    // public person: Person;
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }
}

// const ironman = new Person('Ironman', 'Ner York');

const tony = new Person('Tony Stark', 'New York');
const ironman = new Heroe('Ironman', 45, 'Tony', tony);


console.log(ironman);