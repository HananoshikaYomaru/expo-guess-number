const generateRandomBetween = (min, max, exclude ) => {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    // console.log(`generate number between ${min} and ${max - 1}, excluding `);
    // console.log(...exclude ) ; 
    const rndNum = Math.floor(Math.random() * (max - min) + min ) ; // this will exclude the max, for example if max is 100, then max rndNum is 99
    if (rndNum === NaN)
        throw new Error('something is wrong ');
    if(exclude.includes(rndNum))
        return generateRandomBetween(min, max , exclude) ; 
    else 
        return rndNum ; 
} 

export {generateRandomBetween} ; 