function arrayNumbers(randomArray: Array<number>, targetNumber: number){
    // let array = new Array<number>();
    for(let i = 0; i < randomArray.length; i++){
        const num = targetNumber - randomArray[i];
        //console.log(num)
        // if(randomArray.includes(num) === true){
        //     return 'sim';
        // } else {
        //     return 'não';
        // }
    }
}

// console.log(arrayNumbers([5, 12, 8, 130, 44], 20));


const arr = [5, 12, 8, 130, 44];
console.log(arr.includes(8));