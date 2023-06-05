function arrayNumbers(randomArray: Array<number>, targetNumber: number){
    for(let i = 0; i < randomArray.length; i++){
        const currentNumber = randomArray[i];
        const result = targetNumber - currentNumber;
        let arrayResult: number[] = [];

        if(randomArray.indexOf(result) != -1 && randomArray.indexOf(result) != i){
            arrayResult = [randomArray.indexOf(result), i];
            return arrayResult.sort((a, b) => a - b);
        }
    }
    return []
}

// array que quebrava a solução 👇
console.log(arrayNumbers([5, 5, 8, 130, 44], 10)); // [0, 1]
console.log(arrayNumbers([5, 6, 8, 130, 44], 11)); // [0, 1]
console.log(arrayNumbers([5, 12, 8, 130, 44], 52)); // [2, 4]
console.log(arrayNumbers([5, 12, 8, 130, 44, 20, 200, 34, 21, 63, 89, 1, 9, 420, 80, 57], 100)); // [5, 14]