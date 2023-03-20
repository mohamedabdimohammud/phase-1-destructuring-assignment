// Destructuring Assignment for Strings
const farmAnimals = 'cow horse sheep pig chicken';
const [cow, horse, sheep, pig, chicken] = farmAnimals.split(' ');

// Destructuring Assignment for Arrays
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Destructuring Assignment for Objects
const doggie = {
name: 'Buzz',
breed: 'Great Pyrenees',
furColor: 'black and white',
activityLevel: 'sloth-like',
favoriteFood: 'hot dogs',
};

const { name, breed, furColor, activityLevel, favoriteFood } = doggie;

const ham = doggie.favoriteFoods.meats.ham;
const hotDog = doggie.favoriteFoods.meats.hotDog;
const american = doggie.favoriteFoods.cheeses.american;

const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
const [, small, giant] = dogs;

const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');