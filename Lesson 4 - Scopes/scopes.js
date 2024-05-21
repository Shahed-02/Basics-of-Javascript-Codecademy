// Blocks & Scope 

const city = 'New York City'

const logCitySkyline = () => {
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;

}
console.log(logCitySkyline())

// Global Scope 


const satellite = 'The Moon'
const galaxy = 'The Milky Way'
const stars = 'North Star'

const callMyNightSky = () =>{
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

}

console.log(callMyNightSky());
console.log(stars);

// Block Scope

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
}

logVisibleLightWaves()
console.log(lightWaves) // Reference Error comes here 

// Scope Pollution

// This was done above 

// Practice Good Scoping 

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic'){
        let lightWaves = 'Northern Lights'
        console.log(lightWaves)
    }
    
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();








