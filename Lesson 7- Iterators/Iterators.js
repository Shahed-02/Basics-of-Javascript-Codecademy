
// Iterators 


// The .forEach() Method 

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

// The .map() Method 

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animal => animal[0]);


console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)

// The .filter() Method 



const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
 const smallNumbers = randomNumbers.filter(function(smallNumbers){
  if (smallNumbers < 250){
    return true;
  }
 })


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below


const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})


// The .findIndex() Method 

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(foundAnimal =>{
  return foundAnimal === "elephant" 
});


const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});


// The .reduce() Method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {

  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);;
  
  return accumulator + currentValue
  
},10)

console.log(newSum)

// Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(word => {
  return word.length > 5;

})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word =>  word.length > 5));

// Choose the Right Iterator


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => {
  return num.length - 5});

// Choose a method that will return a boolean value
nums.some(num => {
  return num < 0});



// Review

// .forEach() - is used to execute the same code on every element in an array but does not change the array and returns undefined.

// .map() executes the same code on every element in an array and returns a new array with the updated elements.

// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria

//.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition

// .reduce() iterates through an array and takes the values of the elements and returns a single value.


