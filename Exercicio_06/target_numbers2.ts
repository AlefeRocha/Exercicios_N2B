function arrayNumbers(randomArray: Array<number>, targetNumber: number){
    for(let i = 0; i < randomArray.length; i++){
        const currentNumber = randomArray[i];
        const result = targetNumber - currentNumber;
        let arrayResult: number[] = [];

        // console.log('Este é o numero do array no momento: ' + currentNumber);
        // console.log(`Este é o resultado(${result}) == ${targetNumber} - ${currentNumber}`);
        console.log('Este é o indice do for ' + i);
        console.log(`Este é o index do resultado(${randomArray.indexOf(result)}).`);
        console.log('-------------------------------');

        if(randomArray.indexOf(result) != -1 && randomArray.indexOf(result) != i){
            arrayResult = [randomArray.indexOf(result), i];
            return arrayResult.sort((a, b) => a - b);
        }

        // if(randomArray.includes(result) && randomArray.indexOf(result) != randomArray.indexOf(currentNumber)){
        //     return [randomArray.indexOf(currentNumber), randomArray.indexOf(result)];
        //     //return [randomArray.indexOf(currentNumber), i];
        // }
    }
    return []
}
// quebrou a solução 👇
console.log(arrayNumbers([5, 5, 8, 130, 44], 10));
console.log(arrayNumbers([5, 6, 8, 130, 44], 11));
console.log(arrayNumbers([5, 12, 8, 130, 44], 52));

// console.log(arrayNumbers([5, 5, 8, 130, 44], 10));
// console.log(arrayNumbers([5, 6, 8, 130, 44], 11));
// console.log(arrayNumbers([5, 12, 8, 130, 44], 52));