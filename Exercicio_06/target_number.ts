function arrayNumbers(randomArray: Array<number>, targetNumber: number){
    let arrayResult: number[] = [];

    for(let i = 0; i < randomArray.length; i++){
        console.log('Numero ' + randomArray[i] + ' do array');
        const num1 = targetNumber;
        const num2 = randomArray[i];
        const result = num1 - num2;
        const index1 = randomArray.indexOf(num2);
        const index2 = randomArray.indexOf(result);
        console.log(`Numero alvo(20) - numero array(${randomArray[i]}) da: ` + result);
        console.log('Index de ' + index1);

        if(randomArray.includes(result) === true){
            arrayResult = [randomArray.indexOf(num2), randomArray.indexOf(result)];
            return `Os índices são: ${arrayResult}`;
        }
        console.log('O resultado ' + result + ' Não está incluso');
        console.log('---------------');
    }
}

console.log(arrayNumbers([5, 12, 8, 130, 44], 20));

// const arr = [5, 12, 8, 130, 44];
// console.log(arr.includes(8));