const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
};

const varucard: Character = {
  name: 'Varucard',
  hp: 100,
  skills: ['Bash', 'Counter'],
  hometown: 'Ecuador'
};

varucard.hometown = 'Rivendell';

console.table(varucard);

export {};
