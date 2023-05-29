function arrayNumbers(array: number[] = []){
    const newArray: number[] = [...array];
    newArray.sort(function(a, b){
        return a - b;
        // 3(a) - 6(b) >> 3(a) - 9(b) >> 3(a) - 1(b)...
        // Precisa retornar negativo se o primeiro item for menor;
        // positivo se for maior, ou zero se forem iguais.
    })
    console.log(array);
    console.log(newArray);
}

arrayNumbers([3, 6, 9, 1, 2, 2, 4, 7, 10, 5]);

// result
// console.log(array) => [3, 6, 9, 1, 2, 2, 4, 7, 10, 5]
// console.log(newArray) => [ 1, 2, 2, 3, 4, 5, 6, 7, 9, 10];