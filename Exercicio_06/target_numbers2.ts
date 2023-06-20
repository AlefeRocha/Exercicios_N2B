// function arrayNumbers(randomArray: Array<number>, targetNumber: number){
//     for(let i = 0; i < randomArray.length; i++){
//         const currentNumber = randomArray[i];
//         const result = targetNumber - currentNumber;
//         let arrayResult: number[] = [];

//         if(randomArray.indexOf(result) != -1 && randomArray.indexOf(result) != i){
//             arrayResult = [randomArray.indexOf(result), i];
//             return arrayResult.sort((a, b) => a - b);
//         }
//     }
//     return []
// }

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

// array que quebrava a solução 👇
console.log(arrayNumbers([5, 5, 7], 10)); // [0, 1]
console.log(arrayNumbers([5, 4, 7], 12)); // [0, 2]
console.log(arrayNumbers([4, 5, 7], 12)); // [1, 2]

// console.log(arrayNumbers([5, 5, 8, 130, 44], 10)); // [0, 1]
// console.log(arrayNumbers([5, 6, 8, 130, 44], 11)); // [0, 1]
// console.log(arrayNumbers([5, 12, 8, 130, 44], 52)); // [2, 4]
// console.log(arrayNumbers([5, 12, 8, 130, 44, 20, 200, 34, 21, 63, 89, 1, 9, 420, 80, 57], 100)); // [5, 14]


//no primeiro for, eu vou mexer com o primeiro numero 5(primeiro indice) do array
//ai no segundo for, vou pegar o numero 5(primeiro indice) e somar com o segundo(4, segundo indice)
//validar se é igual o numero 12, se for, encerra o código e mostra os indices, se não, continua
//ai no segundo for ainda, vou pegar o numero 5(primeiro indice) e somar com o terceiro(7, segundo indice)
//validar se é igual o numero 12, se for, encerra o código e mostra os indices, se não, retorna um array vazio. Achamos os numeros que somados da 12.
//[0, 2]


//no primeiro for, eu vou mexer com o primeiro numero 4(primeiro indice) do array
//ai no segundo for, vou pegar o numero 4(primeiro indice) e somar com o segundo(5, segundo indice)
//validar se é igual o numero 12, se for, encerra o código e mostra os indices, se não, continua
//ai no segundo for ainda, vou pegar o numero 5(primeiro indice) e somar com o terceiro(7, segundo indice)
//validar se é igual o numero 12, se for, encerra o código e mostra os indices, se não, retorna um array vazio.
//[0, 2]