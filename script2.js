const [a, b, c, d] = countC(12, 10);

function countC(a, b, c = 0, d = 0) {
  return [a + b, a - b, a * c];
}
console.log(a, b);

function countC(a, b, c, d) {
  return [(a = b), a - c, a * c, c / d];
}

console.log(countC(10, 2));

const person = {
  name: 'Maks',
  age: 20,
  address: {
    country: 'Ukraine',
    city: 'Kiev',
  },
  lastName: 'petrov',
};
const {
  name: firstName = 'No',
  age,
  lastName,
  car = 'Машины нет',
  address: { city: nowcity, country },
} = person;
console.log(firstName, lastName, nowcity, country);

function logPerson({ name, age, address: { country } }) {
  console.log(`${name} которому ${age} и живет он в ${country}`);
}
logPerson(person);
