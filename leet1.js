
const result = (array) => {
    let i, temp = 0, count = 0;
    for(i = 0; i < array.length; i++) {
        if(array[i] === 1) {
            count++;
            if (temp < count) {
                temp = count;
            }
        }else {
            count = 0;
        }
    }
    return temp;
}

let arr=[2, 1, 1, 1, 24, 4, 0, 1, 1, 1, 1, 1, 1, 8, 1];
console.log(result(arr));
