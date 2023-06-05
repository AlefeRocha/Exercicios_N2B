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
console.log(arrayNumbers([5, 5, 8, 130, 44], 10));
console.log(arrayNumbers([5, 6, 8, 130, 44], 11));
console.log(arrayNumbers([5, 12, 8, 130, 44], 52));