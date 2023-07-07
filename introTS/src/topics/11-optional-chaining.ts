export interface Passenger {
  name: string;
  childrens?: string[];
}

const passenger1: Passenger = {
  name: 'Cristian',
}

const passenger2: Passenger = {
  name: 'Mercedes',
  childrens: ['Luz', 'Lujan']
}

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.childrens?.length || 0;

  console.log(howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);