// Functions as Data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  isTwoPlusTwo();
  
  console.log(isTwoPlusTwo.name)
  
  // Functions as  Paramaters 
  
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
      const checkA = val + 2
      const checkB = func(val)
  
      if (checkA === checkB){
          return func(val)
      }else console.log("inconsistent result");
  
  }
  
  console.log(checkConsistentOutput(addTwo,2));
  
  
  /* Review 
  
  Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.
  
  We can work with functions the same way we work with any other type of data, including reassigning them to new variables.
  
  LavaScript functions are first-class objects, so they have properties and methods like any other object.
  
  Functions can be passed into other functions as parameters.
  
  A higher-order function is a function that either accepts functions as parameters, returns a function, or both. */
  