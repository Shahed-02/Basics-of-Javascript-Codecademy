// Repeating Tasks Manually 

let vacationSpots1 = ['Dubai','Germany','Jerusalem']

console.log(vacationSpots1[0])
console.log(vacationSpots1[1])
console.log(vacationSpots1[2])

// The For Loop

for (let counter = 5; counter < 11; counter++){
    console.log(counter);
}

// Loops in reverse 

for (let number = 3; number >= 0; number--) {
    console.log(number)
}

// Loops through Arrays 


const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
    console.log('I would like to visit '+ vacationSpots[i])
}


// Nested Loops

let bobsFollowers = ['Tim', 'Jill', 'Fred', 'Tom']

let tinasFollowers = ['Tim', 'Jill', 'Goku']

let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < tinasFollowers.length; j++){
        if(bobsFollowers[i]===tinasFollowers[j]){
            mutualFollowers.push(bobsFollowers[i])
        }
    }
}

//The While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = ''
while(currentCard != 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
   
}

//Do While statements 
 let cupsOfSugarNeeded = 10
 let cupsAdded = 0

 do {
    cupsAdded++
    console.log(cupsAdded + ' cup was added') 
   } while (cupsAdded < cupsOfSugarNeeded);

   // The Break Keyword

   const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];


   for (let i = 0; i < rapperArray.length; i++){
    console.log(rapperArray[i])
    if (rapperArray[i] === 'Notorious B.I.G.'){
        break;
    }
   
   }
      console.log("And if you don't know, now you know.")