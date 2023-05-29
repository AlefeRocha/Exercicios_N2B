function arrayNumbers(array: number[] = []){
    // const newArray: number [] = array.sort(function(a, b){
    array.sort(function(a, b){
        return a - b;
        // 3(a) - 6(b) >> 3(a) - 9(b) >> 3(a) - 1(b)...
        // Precisa retornar negativo se o primeiro item for menor;
        // positivo se for maior, ou zero se forem iguais.
    })
    
    //console.log(newArray);
    console.log(array);
}

// arrayNumbers([10, 3, 5, 4.5, 8, 34, 45, 112, 1, 0.4]);
arrayNumbers([3, 6, 9, 1, 2, 2, 4, 7, 10, 5]);
