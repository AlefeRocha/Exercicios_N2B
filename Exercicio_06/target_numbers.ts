function arrayNumbers(randomArray: Array<number>, targetNumber: number){
    for(let i = 0; i < randomArray.length; i++){
        for(let j = i + 1; j < randomArray.length; j++){
            if(randomArray[i] + randomArray[j] == targetNumber){
                let arrayResult = [i, j];
                return arrayResult;
            }
        }
    }
    return []
}