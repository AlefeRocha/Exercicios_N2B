function arrayNumbers(array: number[] = []){
    const newArray: number[] = [...array];
    newArray.sort(function(a, b){
        return a - b;
    })
    console.log(array);
    console.log(newArray);
}