const result = (array) => {
    let number, count, supercount = 0;
    for (i = 0; i < array.length; i++) {
        number = array[i];
        count = 0;
        while (number >= 1){
            number = number / 10;
            count++;
        }
        if(count % 2 === 0 && number != 0){
            supercount++;
        }
    }
    return supercount;
}
const arr=[0, 1, 111, 1, 0, 12, 11, 2];
console.log(result(arr));

