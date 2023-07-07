function addNumbers(a: number, b: number): number{
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
  return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({result, result2, multiplyResult});

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharecter = (character: Character, amount: number) => {
  character.hp += amount;
}

const varucard: Character = {
  name: 'Varucard',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${ this.hp }`);
  },
}

varucard.showHp();

healCharecter(varucard, 10);

varucard.showHp();

export {};