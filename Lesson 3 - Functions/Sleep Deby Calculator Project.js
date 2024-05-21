let getSleepHours =  (day) => {
    switch(day){
        case 'monday':
            return 8
            break;
            case 'tuesday':
            return 7
            break;
            case 'wednesday':
                return 6
                break;
                case 'thursday':
                    return 8
                    break;
                    case 'friday':
                        return 7
                        break;
                        case 'saturday':
                            return 5
                            break;
                            case 'Sunday':
                                return 8
                                break;
                                
                                default:
                                    return 'Error!'
    }
}



console.log(getSleepHours('monday'))

let getActualSleepHours =  () => 
     getSleepHours('monday')+
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thurday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday');
    


console.log(getSleepHours('monday'))
console.log(getActualSleepHours())


const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const IdealSleepHours = getIdealSleepHours();

    if(actualSleepHours === IdealSleepHours){
        console.log('You got the perfect amount of sleep!');
    } 
    else if (actualSleepHours > IdealSleepHours){
        console.log('You slept more than needed')
    }
    else if(getActualSleepHours < IdealSleepHours){
        console.log('You slept less than your ideal sleep hours')
    }
    else{
        console.log('Something went wrong ')

    }
       

        
};

calculateSleepDebt();
