function arrayNumbersFor(array: number[] = []){
    let min: number = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i] <= min){
            min = array[i];
        }
    }
    console.log(min);
}

// arrayNumbersFor([-1, 7, 4, 5, 8, 3, 40, 4, 0, -3]);
arrayNumbersFor([1, 4, 3, 5]);

// NÃO FINALIZADO