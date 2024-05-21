let  myAge = 19
// This sets a varaible called myAge to 19 it cannot change value 
let earlyYears = 2
// This sets a variable called earlyYears to 2, this CAN be changed
 earlyYears *= 10.5 

 laterYears = myAge - 2
 // This sets a variable called laterYears from myAge variable 
 laterYears *= 4 
 // This times the laterYears variable by 4 

 console.log(earlyYears, laterYears)

 let myAgeInDogYears = earlyYears + laterYears
 // This adds the 2 values of the variables together to create the variable myAgeInDogYears 

 let myName = "Shahed".toLocaleLowerCase()
 // this returns the value and puts the string to lowercase 
 console.log(myName)

 console.log(`My name is ${myName}. I am ${myAge} years old in human uears which in ${myAgeInDogYears} years old in dog years.`)
