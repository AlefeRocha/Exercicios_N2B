function arrayNumbers(randomArray: Array<number>, targetNumber: number){
    for(let i = 0; i < randomArray.length; i++){
        const currentNumber = randomArray[i];
        const result = targetNumber - currentNumber;

        if(randomArray.includes(result) && randomArray.indexOf(result) != i){
            return [randomArray.indexOf(currentNumber), randomArray.indexOf(result)];
        }
    }

    return []
}

console.log(arrayNumbers([5, 12, 8, 130, 44], 52));

// quebrou a solução 👇
console.log(arrayNumbers([5, 5, 8, 130, 44], 10));