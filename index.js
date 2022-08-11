//1. Array Destructuring

const [fruits, vegetable, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];
console.log(fruits);
console.log(vegetable);
console.log(food);

//2.Object Destructuring

let halloween = {
  fran: "witch",
  ghost: "robe",
};

const { fran: dress1, ghost: dress2 } = halloween;
console.log(dress1, dress2);

//3.Parameters: Object Destructuring.

const myFavBand = {
  Bandname: "Regina spektor",
  nationality: "American-Russian",
  genre: "indie-pop",
  greatesthit: "Us",
};

function bioMyBand({ Bandname, nationality, genre, greatesthit }) {
  console.log(
    `${Bandname} is a  ${nationality} singer somgwriter and pianist.The musician sings ${genre} and their greatest hit is "${greatesthit}". `
  );
}

bioMyBand(myFavBand);
